"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const id = setTimeout(() => setYear(new Date().getFullYear()), 0);
    return () => clearTimeout(id);
  }, []);

  return (
    <footer
      className="relative py-10 md:py-12 bg-white border-t border-[var(--color-border)]"
      role="contentinfo"
    >
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-[var(--color-text-heading)] font-semibold text-xl mb-4"
              aria-label="Nonhlahla Ngulube - Home"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white font-bold text-sm">
                NN
              </span>
              <span>Nonhlahla Ngulube</span>
            </Link>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed max-w-xs">
              Customer Service Representative delivering excellent client support by phone, email, WhatsApp and digital channels.
            </p>
          </div>

          {/* Navigation */}
          <nav className="md:col-span-1" aria-label="Footer navigation">
            <h3 className="text-sm font-semibold text-[var(--color-text-heading)] uppercase tracking-wider mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/#experience"
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact & Social */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-[var(--color-text-heading)] uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:nonhlahlasunrise@gmail.com"
                  className="flex items-center gap-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span>nonhlahlasunrise@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+263777240444"
                  className="flex items-center gap-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span>0777 240 444</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
                <MapPin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span>Harare, Zimbabwe</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-text-muted)]">
            &copy; {year ?? ""} Nonhlahla Ngulube. All rights reserved.
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}