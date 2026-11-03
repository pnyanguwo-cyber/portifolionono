import React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { TechStackBadge } from "@/components/tech-stack-badge";
import Link from "next/link";

const education = [
  "BA Honours Degree in Media and Cultural Studies — Great Zimbabwe University, 2022",
  "O-Level Qualifications — Five passes, including English Language",
];

const certifications = [
  "HP LIFE — Social Media Marketing Certificate",
];

const languages = [
  "Ndebele — native",
  "English — fluent",
  "Shona — fluent",
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main id="main-content" className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative py-20 md:py-32 bg-[var(--color-bg-pale-blue)]">
          <div className="absolute inset-0 bg-decor-grid opacity-50 pointer-events-none" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

          <div className="container relative">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-6"
            >
              &larr; Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)] mb-4 animate-fade-in-up">
              About
            </h1>
            <p className="text-lg text-[var(--color-text-body)] leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              I&apos;m a customer-focused professional with over three years of experience across customer
              service, client communication, sales and relationship support.
              <br /><br />
              I handle customer enquiries, investigate concerns, explain products and services clearly and follow
              issues through to resolution across telephone and digital channels. I&apos;m currently open to new
              opportunities — full-time and contract roles based in Harare, Zimbabwe.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="container max-w-3xl">
            <section className="mb-16 animate-fade-in-up">
              <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4">Education</h2>
              <ul className="space-y-2 text-[var(--color-text-body)] text-sm border-l-2 border-[var(--color-border)] pl-4">
                {education.map((item, i) => (
                  <li key={i} className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4">Certifications</h2>
              <ul className="space-y-2 text-[var(--color-text-body)] text-sm border-l-2 border-[var(--color-border)] pl-4">
                {certifications.map((item, i) => (
                  <li key={i} className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4">Additional Information</h2>
              <ul className="space-y-2 text-[var(--color-text-body)] text-sm border-l-2 border-[var(--color-border)] pl-4">
                <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                  Nationality: Zimbabwean
                </li>
                <li className="relative before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-text-muted)]">
                  References: Available on request
                </li>
              </ul>
            </section>

            <section className="bg-[var(--color-bg-pale-blue)] border border-[var(--color-border)] rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <h2 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4">Core Competencies</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  ...languages,
                  "Customer Care",
                  "Complaint Handling",
                  "SLA Compliance",
                  "First-Contact Resolution",
                  "CRM Records",
                  "Zendesk",
                  "SAP C4C",
                  "Microsoft Office",
                ].map((skill) => (
                  <TechStackBadge key={skill} name={skill} />
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
