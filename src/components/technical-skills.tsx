"use client";

import React from "react";
import { Headset, MessageCircle, Gauge, MonitorSmartphone } from "lucide-react";
import { Reveal } from "@/components/reveal";

const skillCategories = [
  {
    title: "Customer Care",
    icon: Headset,
    color: "text-[var(--color-primary)]",
    bgColor: "bg-[var(--color-primary-light)]",
    skills: [
      { name: "Enquiry & Complaint Handling", color: "bg-teal-50 text-teal-700" },
      { name: "Needs Identification", color: "bg-teal-50 text-teal-700" },
      { name: "Problem Solving", color: "bg-stone-100 text-stone-700" },
      { name: "First-Contact Resolution", color: "bg-amber-50 text-amber-700" },
      { name: "Customer Follow-Up", color: "bg-amber-50 text-amber-700" },
      { name: "Relationship Management", color: "bg-emerald-50 text-emerald-700" },
    ],
  },
  {
    title: "Communication",
    icon: MessageCircle,
    color: "text-[var(--color-cyan)]",
    bgColor: "bg-[var(--color-cyan-light)]",
    skills: [
      { name: "Clear Verbal Communication", color: "bg-emerald-50 text-emerald-700" },
      { name: "Written Communication", color: "bg-stone-100 text-stone-700" },
      { name: "Telephone Support", color: "bg-teal-50 text-teal-700" },
      { name: "Email, WhatsApp & Digital", color: "bg-teal-50 text-teal-700" },
      { name: "Issue Escalation & Team Coordination", color: "bg-amber-50 text-amber-700" },
    ],
  },
  {
    title: "Service Quality",
    icon: Gauge,
    color: "text-[var(--color-success)]",
    bgColor: "bg-[var(--color-success-light)]",
    skills: [
      { name: "Service Quality & SLA Compliance", color: "bg-emerald-50 text-emerald-700" },
      { name: "Resolution Follow-Through", color: "bg-teal-50 text-teal-700" },
      { name: "Records & Reporting", color: "bg-stone-100 text-stone-700" },
      { name: "Documentation Accuracy", color: "bg-stone-100 text-stone-700" },
    ],
  },
  {
    title: "Tools & Systems",
    icon: MonitorSmartphone,
    color: "text-[var(--color-primary)]",
    bgColor: "bg-[var(--color-primary-light)]",
    skills: [
      { name: "CRM Systems", color: "bg-teal-50 text-teal-700" },
      { name: "Zendesk", color: "bg-stone-800 text-white" },
      { name: "SAP & SAP C4C", color: "bg-teal-50 text-teal-700" },
      { name: "Microsoft Office", color: "bg-amber-50 text-amber-700" },
      { name: "Ticketing Systems", color: "bg-stone-100 text-stone-700" },
    ],
  },
];

export function TechnicalSkills() {
  return (
    <section
      id="skills"
      className="relative py-16 md:py-24 bg-[var(--color-bg-pale-blue)]"
      aria-labelledby="skills-heading"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-decor-grid opacity-50 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container relative">
        <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[var(--color-primary)] bg-[var(--color-primary-light)] rounded-full mb-4">
            MY CORE SKILLS
          </span>
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)] mb-4 leading-tight">
            Skills I{' '}<span className="text-gradient-animate">Bring Every Day</span>
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg">
            A practical toolkit for delivering excellent customer experiences.
          </p>
        </div>
        </Reveal>

        <Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className="group p-6 rounded-2xl border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${category.bgColor} ${category.color}`}
                aria-hidden="true"
              >
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-heading)] mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1 text-xs font-medium rounded-full ${skill.color} border border-transparent hover:border-current/20 transition-colors`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
}
