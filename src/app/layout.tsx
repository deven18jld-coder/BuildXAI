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
    default: "AI Automation & Website Development Services | BuildXAI",
    template: "%s | BuildXAI",
  },
  description:
    "BuildXAI offers AI automation, website development & n8n workflow solutions for businesses. Affordable small business automation, web design & data services.",
  keywords: [
    "AI automation",
    "website development",
    "small business automation",
    "n8n automation",
    "web design services",
    "AI voice agent",
    "WhatsApp automation",
    "Excel dashboard",
    "website redesign",
    "business automation",
    "AI automation for gyms",
    "website development for local businesses",
    "automation for coaching institutes",
    "gym automation",
    "coaching institute automation",
    "local business website",
    "BuildXAI",
  ],
  authors: [{ name: "BuildXAI" }],
  openGraph: {
    title: "AI Automation & Website Development Services | BuildXAI",
    description:
      "Affordable AI automation, website development & n8n solutions for businesses. Get more leads, automate workflows & scale faster.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation & Website Development Services | BuildXAI",
    description:
      "Affordable AI automation, website development & n8n solutions for businesses. Get more leads, automate workflows & scale faster.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
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
  