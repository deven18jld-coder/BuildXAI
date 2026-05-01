import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BuildXAI - Premium Web Development & AI Automation",
  description:
    "Transform your business with BuildXAI's premium web development, AI automation, and data services. Expert solutions for modern businesses.",
  keywords: [
    "web development",
    "AI automation",
    "data services",
    "n8n automation",
    "voice agents",
    "WhatsApp automation",
    "Excel dashboards",
  ],
  authors: [{ name: "BuildXAI" }],
  openGraph: {
    title: "BuildXAI - Premium Web Development & AI Automation",
    description:
      "Transform your business with cutting-edge technology solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildXAI - Premium Web Development & AI Automation",
    description:
      "Transform your business with cutting-edge technology solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
