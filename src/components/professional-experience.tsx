"use client";

import React from "react";
import { MapPin, CalendarRange } from "lucide-react";
import { Reveal } from "@/components/reveal";

const roles = [
  {
    title: "Customer Service Representative",
    company: "Logicall Live",
    location: "Harare, Zimbabwe",
    period: "August 2025 — Present",
    highlights: [
      "Respond to enquiries via telephone and digital channels with accurate information and professional support",
      "Investigate billing, payment, order and account concerns, coordinating with teams to resolve them",
      "Maintain clear, accurate customer interaction records in CRM and ticketing systems",
    ],
    metric: "96% First Contact Resolution",
  },
  {
    title: "Customer Service Representative",
    company: "Distance Dynamics",
    location: "Harare, Zimbabwe",
    period: "February 2025 — July 2025",
    highlights: [
      "Handled client correspondence and follow-up on quotations, orders, availability and deliveries",
      "Worked with suppliers and internal teams to resolve order and shipment discrepancies",
      "Prepared and checked quotations, purchase orders and customer documentation",
    ],
    metric: "95% SLA Compliance",
  },
  {
    title: "Sales Representative & Content Creator",
    company: "Zimbabwe Catfish Growers",
    location: "Harare, Zimbabwe",
    period: "May 2024 — January 2025",
    highlights: [
      "Engaged customers on questions and needs, with client visits, quotations and sales support",
      "Created promotional content for Facebook, TikTok and Instagram to engage audiences",
      "Prepared sales reports and kept customer information organised",
    ],
  },
  {
    title: "Financial Advisor",
    company: "ZIMNAT",
    location: "Harare, Zimbabwe",
    period: "November 2023 — April 2024",
    highlights: [
      "Reached prospective clients by phone, WhatsApp and face to face to explain life assurance and investment products",
      "Followed up on leads and supported customers with policy sign-ups",
      "Maintained professional client relationships and accurate records",
    ],
  },
  {
    title: "Student Intern — Presenter / Producer",
    company: "Great Zimbabwe University Campus Radio",
    location: "Masvingo, Zimbabwe",
    period: "January 2020 — December 2020",
    highlights: [
      "Presented \"The Great Drive Time\" and conducted interviews for student and community audiences",
      "Researched topics and prepared radio content, sharpening communication and audience engagement",
      "Supported social-media activations and promotions for campus events",
    ],
  },
];

export function ProfessionalExperience() {
  return (
    <section
      id="experience"
      className="relative py-16 md:py-24 bg-white"
      aria-labelledby="experience-heading"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[var(--color-cyan)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[var(--color-primary)] bg-[var(--color-primary-light)] rounded-full mb-4">
            PROFESSIONAL EXPERIENCE
          </span>
          <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)] mb-4 leading-tight">
            Real Service.{' '}<span className="text-gradient-animate">Real Results.</span>
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg">
            Three years of putting customers first — from contact centre operations to sales and broadcasting.
          </p>
        </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((role, index) => (
            <article
              key={`${role.company}-${role.period}`}
              className={`group relative rounded-2xl border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)]/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-500 animate-fade-in-up ${
                roles[0].title === role.title && roles[0].company === role.company
                  ? "md:col-span-2"
                  : ""
              }`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Card content */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-heading)]">
                    {role.title}
                  </h3>
                  {role.metric && (
                    <span className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)] bg-[var(--color-primary-light)] rounded-full border border-[var(--color-primary)]/20 whitespace-nowrap">
                      {role.metric}
                    </span>
                  )}
                </div>
                <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[var(--color-text-muted)] mb-5">
                  <span className="font-semibold text-[var(--color-primary)]">{role.company}</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {role.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <CalendarRange className="h-3.5 w-3.5" aria-hidden="true" />
                    {role.period}
                  </span>
                </p>

                {/* Highlights */}
                <ul className="space-y-2 pt-4 border-t border-[var(--color-border)]">
                  {role.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-[var(--color-text-body)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-1.5 flex-shrink-0" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
