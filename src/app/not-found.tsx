"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] flex items-center">
      <Container size="sm" className="text-center">
        <h1 className="text-6xl font-bold text-[#111111] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#5F6368] mb-4">
          Page Not Found
        </h2>
        <p className="text-[#9CA3AF] mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <a href="/">
          <Button icon={ArrowLeft}>Back to Home</Button>
        </a>
      </Container>
    </div>
  );
}
