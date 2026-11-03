import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SplashScreen } from "@/components/splash-screen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nonhlahla Ngulube — Customer Service Representative",
  description: "Customer-focused professional delivering excellent client support across telephone and digital channels, with a proven record of first-contact resolution, SLA compliance and accurate CRM records.",
  keywords: ["customer service", "client support", "contact centre operations", "CRM", "Zendesk", "SAP C4C", "customer satisfaction", "Harare", "Zimbabwe"],
  authors: [{ name: "Nonhlahla Ngulube" }],
  openGraph: {
    title: "Nonhlahla Ngulube — Customer Service Representative",
    description: "Customer-focused professional delivering excellent client support across telephone and digital channels, with a proven record of first-contact resolution, SLA compliance and accurate CRM records.",
    type: "website",
    locale: "en_ZW",
    siteName: "Nonhlahla Ngulube Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonhlahla Ngulube — Customer Service Representative",
    description: "Customer-focused professional delivering excellent client support across telephone and digital channels, with a proven record of first-contact resolution, SLA compliance and accurate CRM records.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[var(--color-text-body)]">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {/* Opening splash screen */}
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}