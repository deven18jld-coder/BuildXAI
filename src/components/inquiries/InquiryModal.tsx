"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { InquiryForm } from "./InquiryForm";
import { InquirySuccessState } from "./InquirySuccessState";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClose = () => {
    setShowSuccess(false);
    onClose();
  };

  const handleSuccess = () => {
    setShowSuccess(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={showSuccess ? undefined : "Discuss Project"}
    >
      {showSuccess ? (
        <InquirySuccessState onClose={handleClose} />
      ) : (
        <InquiryForm onSuccess={handleSuccess} />
      )}
    </Modal>
  );
}
