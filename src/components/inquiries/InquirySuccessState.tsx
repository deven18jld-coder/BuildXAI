"use client";

import { CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface InquirySuccessStateProps {
  onClose: () => void;
}

export function InquirySuccessState({ onClose }: InquirySuccessStateProps) {
  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 rounded-full bg-[#D1FAE5] flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-8 h-8 text-[#059669]" />
      </div>
      <h4 className="text-2xl font-bold text-[#111111] mb-3">
        Thank You!
      </h4>
      <p className="text-[#5F6368] mb-8 max-w-sm mx-auto">
        Your inquiry has been submitted successfully. We'll get back to you within 24 hours.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button onClick={onClose} variant="secondary">
          Close
        </Button>
      </div>
    </div>
  );
}
