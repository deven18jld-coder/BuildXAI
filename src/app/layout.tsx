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
  metadataBase: new URL('https://buildxai.in'), // 👈 Ye HTTPS fix karega
  title: {
    default: "AI Automation & Website Development Services for Indian Businesses | BuildXAI",
    template: "%s | BuildXAI",
  },
  description:
    "BuildXAI offers AI automation, website development & n8n workflow solutions for Indian businesses. Affordable small business automation, web design & data services across India.",
  keywords: [
    "AI automation India",
    "website development India",
    "small business automation India",
    "n8n automation India",
    "web design services India",
    "AI voice agent India",
    "WhatsApp automation India",
    "Excel dashboard India",
    "website redesign India",
    "business automation India",
    "AI automation for gyms in India",
    "website development for local businesses in India",
    "automation for coaching institutes in India",
    "gym automation India",
    "coaching institute automation India",
    "local business website India",
    "BuildXAI",
  ],
  authors: [{ name: "BuildXAI" }],
  openGraph: {
    title: "AI Automation & Website Development Services for Indian Businesses | BuildXAI",
    description:
      "Affordable AI automation, website development & n8n solutions for Indian businesses. Get more leads, automate workflows & scale faster.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation & Website Development Services for Indian Businesses | BuildXAI",
    description:
      "Affordable AI automation, website development & n8n solutions for Indian businesses. Get more leads, automate workflows & scale faster.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
    <head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "BuildXAI",
            "url": "https://buildxai.in",
          }),
        }}
      />
    </head>
    <body className="min-h-full flex flex-col">{children}</body>
  </html>
 );
}
  