import React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ProfessionalExperience } from "@/components/professional-experience";

export default function ExperiencePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main id="main-content" className="flex-1 pt-16">
        <section className="relative py-20 md:py-32 bg-[var(--color-bg-pale-blue)]">
          <div className="absolute inset-0 bg-decor-grid opacity-50 pointer-events-none" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

          <div className="container relative">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
              <span className="inline-block px-3 py-1 text-xs font-medium text-[var(--color-primary)] bg-[var(--color-primary-light)] rounded-full mb-4">
                MY CAREER
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)] mb-4 leading-tight">
                Professional Experience
              </h1>
              <p className="text-[var(--color-text-muted)] text-lg">
                Three years of customer service, sales and client support — with measurable results.
              </p>
            </div>

            <ProfessionalExperience />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
