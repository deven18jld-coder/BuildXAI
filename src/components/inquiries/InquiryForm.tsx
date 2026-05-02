"use client";

import { useEffect } from "react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { useInquiryForm } from "@/hooks/useInquiryForm";
import { services } from "@/lib/constants/services";
import { Loader2, AlertCircle } from "lucide-react";

interface InquiryFormProps {
  onSuccess: () => void;
}

export function InquiryForm({ onSuccess }: InquiryFormProps) {
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    submitError,
    handleChange,
    handleSubmit,
  } = useInquiryForm();

  const serviceOptions = [
    ...services.map((service) => ({
      value: service.title,
      label: service.title,
    })),
    { value: "Other", label: "Other" },
  ];

  // Call onSuccess after successful submission (in useEffect, not during render)
  useEffect(() => {
    if (isSuccess) {
      onSuccess();
    }
  }, [isSuccess, onSuccess]);

  // Don't render form if already successful
  if (isSuccess) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {submitError && (
        <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>{submitError}</span>
        </div>
      )}

      {/* Honeypot field - visually hidden to catch bots */}
      <div className="absolute w-0 h-0 opacity-0 overflow-hidden" aria-hidden="true" tabIndex={-1}>
        <label htmlFor="bot_field">Leave this field blank</label>
        <input
          type="text"
          id="bot_field"
          name="bot_field"
          value={formData.bot_field || ""}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Input
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        required
        placeholder="Your full name"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          required
          placeholder="10 digit mobile number"
          maxLength={10}
          pattern="[6-9][0-9]{9}"
        />

        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Your email (optional)"
        />
      </div>

      <Select
        label="Service Interested In"
        name="service_type"
        value={formData.service_type}
        onChange={handleChange}
        error={errors.service_type}
        required
        options={serviceOptions}
      />

      <Textarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        placeholder="Tell us about your project requirements... (optional)"
        rows={4}
      />

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Inquiry"
        )}
      </Button>
    </form>
  );
}
