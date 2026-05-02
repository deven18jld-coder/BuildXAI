"use client";

import { useState } from "react";
import { InquiryFormData } from "@/types/inquiry";
import {
  validateName,
  validatePhone,
  validateEmail,
  validateMessage,
  validateRequired,
} from "@/lib/utils/validation";

interface UseInquiryFormReturn {
  formData: InquiryFormData;
  setFormData: React.Dispatch<React.SetStateAction<InquiryFormData>>;
  errors: Record<string, string>;
  isSubmitting: boolean;
  isSuccess: boolean;
  submitError: string | null;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

const initialFormData: InquiryFormData = {
  name: "",
  phone: "",
  email: "",
  service_type: "",
  message: "",
  bot_field: "",
};

export function useInquiryForm(): UseInquiryFormReturn {
  const [formData, setFormData] = useState<InquiryFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!validateRequired(formData.name)) {
      newErrors.name = "Name is required";
    } else if (!validateName(formData.name)) {
      newErrors.name = "Name must be at least 3 characters and contain only letters";
    }

    if (!validateRequired(formData.phone)) {
      newErrors.phone = "Phone is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number";
    }

    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!validateRequired(formData.service_type)) {
      newErrors.service_type = "Please select a service";
    }

    if (formData.message) {
      if (formData.message.trim().length > 0 && formData.message.trim().length < 10) {
        newErrors.message = "Message must be at least 10 characters";
      } else if (!validateMessage(formData.message)) {
        newErrors.message = "Please enter a meaningful message without repeated characters";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // If honeypot is filled, act like it succeeded to fool bots
    if (formData.bot_field) {
      setIsSuccess(true);
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
          throw new Error('Please fix the errors in the form.');
        }
        throw new Error(data.error || 'Failed to submit inquiry');
      }

      setIsSuccess(true);
      setFormData(initialFormData);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Failed to submit inquiry"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    setIsSuccess(false);
    setSubmitError(null);
  };

  return {
    formData,
    setFormData,
    errors,
    isSubmitting,
    isSuccess,
    submitError,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
