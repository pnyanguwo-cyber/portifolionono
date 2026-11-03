import React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ExternalLink, Mail, Phone, MapPin, FileText } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const email = "nonhlahlasunrise@gmail.com";
  const phone = "+263 777 240 444";

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main id="main-content" className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative py-20 md:py-32 bg-[var(--color-bg-pale-violet)]">
          <div className="absolute inset-0 bg-decor-dots opacity-50 pointer-events-none" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

          <div className="container relative">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-6"
            >
              &larr; Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text-heading)] mb-4 animate-fade-in-up">
              Contact
            </h1>
            <p className="text-lg text-[var(--color-text-body)] leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Available for full-time roles in customer service and client support. Feel free to reach out.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="container max-w-xl">
            <section className="space-y-4">
              <article className="border border-[var(--color-border)] rounded-xl p-6 flex items-center gap-4 bg-white hover:border-[var(--color-primary)]/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up">
                <div className="p-3 rounded-lg bg-[var(--color-primary-light)] text-[var(--color-primary)] flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-[var(--color-text-heading)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </article>

              <article className="border border-[var(--color-border)] rounded-xl p-6 flex items-center gap-4 bg-white hover:border-[var(--color-primary)]/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                <div className="p-3 rounded-lg bg-[var(--color-primary-light)] text-[var(--color-primary)] flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">Phone / WhatsApp</p>
                  <a
                    href={`tel:+263777240444`}
                    className="text-[var(--color-text-heading)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-1"
                  >
                    0777 240 444
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>

              <article className="border border-[var(--color-border)] rounded-xl p-6 flex items-center gap-4 bg-white hover:border-[var(--color-primary)]/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <div className="p-3 rounded-lg bg-[var(--color-primary-light)] text-[var(--color-primary)] flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">Location</p>
                  <p className="text-[var(--color-text-heading)]">
                    753 Mount Pleasant Heights, Harare, Zimbabwe
                  </p>
                </div>
              </article>

              <article className="border border-[var(--color-border)] rounded-xl p-6 flex items-center gap-4 bg-white hover:border-[var(--color-primary)]/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                <div className="p-3 rounded-lg bg-[var(--color-primary-light)] text-[var(--color-primary)] flex-shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-1">CV / Resume</p>
                  <a
                    href="/cv.pdf"
                    download
                    className="text-[var(--color-text-heading)] hover:text-[var(--color-primary)] transition-colors inline-flex items-center gap-1"
                  >
                    Download PDF
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </section>

            <p className="mt-12 text-sm text-[var(--color-text-muted)]">
              Currently based in Harare, Zimbabwe. Open to remote and relocation opportunities.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
