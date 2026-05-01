"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { InquiryFormData } from "@/types/inquiry";
import {
  validatePhone,
  validateEmail,
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
    }

    if (!validateRequired(formData.phone)) {
      newErrors.phone = "Phone is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!validateRequired(formData.service_type)) {
      newErrors.service_type = "Please select a service";
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

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { error: supabaseError } = await supabase
        .from("inquiries")
        .insert({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || null,
          service_type: formData.service_type,
          message: formData.message,
        } as any);

      if (supabaseError) {
        throw supabaseError;
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
