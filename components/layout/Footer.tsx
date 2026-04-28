import Link from "next/link";
import { Mail, MapPinned } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm11.5 1.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M6.94 6.5a1.56 1.56 0 1 1-3.12 0 1.56 1.56 0 0 1 3.12 0ZM4.1 8.9h2.92V20H4.1V8.9ZM9 8.9h2.79v1.52h.04c.39-.75 1.37-1.55 2.82-1.55 3.02 0 3.58 1.99 3.58 4.58V20h-2.91v-5.08c0-1.21-.02-2.77-1.69-2.77-1.7 0-1.96 1.33-1.96 2.69V20H9V8.9Z" />
    </svg>
  );
}

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M16.7 3.1c.6 1.7 1.9 2.9 3.6 3.4v2.7c-1.2 0-2.4-.3-3.5-.9v5.6c0 3.2-2.6 5.8-5.8 5.8S5.2 17.1 5.2 13.9s2.6-5.8 5.8-5.8c.4 0 .8 0 1.1.1v2.9c-.4-.2-.7-.2-1.1-.2-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9 2.9-1.3 2.9-2.9V2.8h2.8v.3Z" />
    </svg>
  );
}

export default function Footer() {
  const socialLinks = [
    { label: "Instagram", icon: InstagramIcon, href: "https://instagram.com" },
    { label: "LinkedIn", icon: LinkedInIcon, href: "https://linkedin.com" },
    { label: "TikTok", icon: TiktokIcon, href: "https://tiktok.com" },
  ];

  return (
    <footer className="relative z-10 border-t border-[#1f1f1f] bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-8 lg:py-20">
        <div className="space-y-4">
          <p className="font-display text-2xl font-bold uppercase tracking-[0.18em] text-white">
            SEEK <span className="text-accent">•</span> DIGITAL
          </p>
          <p className="max-w-sm text-sm leading-7 text-muted">
            Boutique agency din Iași pentru website-uri, marketing și automatizări care se văd în cifre.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="inline-flex h-11 w-11 items-center justify-center border border-[#1f1f1f] text-white transition hover:border-accent hover:text-accent"
                  aria-label={item.label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <p className="mb-4 font-display text-xs uppercase tracking-[0.24em] text-muted">Servicii</p>
          <ul className="space-y-3 text-sm text-white">
            <li>
              <Link href="/servicii" className="transition hover:text-accent">
                Website-uri
              </Link>
            </li>
            <li>
              <Link href="/servicii" className="transition hover:text-accent">
                E-commerce
              </Link>
            </li>
            <li>
              <Link href="/servicii" className="transition hover:text-accent">
                Marketing
              </Link>
            </li>
            <li>
              <Link href="/servicii" className="transition hover:text-accent">
                Automatizări
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 font-display text-xs uppercase tracking-[0.24em] text-muted">Pagini</p>
          <ul className="space-y-3 text-sm text-white">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-display text-xs uppercase tracking-[0.24em] text-muted">Contact</p>
          <div className="space-y-3 text-sm text-white">
            <p className="flex items-center gap-2 text-muted">
              <Mail className="h-4 w-4 text-accent" /> {siteConfig.email}
            </p>
            <p className="flex items-center gap-2 text-muted">
              <MapPinned className="h-4 w-4 text-accent" /> {siteConfig.address}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1f1f1f] px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs uppercase tracking-[0.18em] text-muted lg:flex-row lg:items-center lg:justify-between">
          <p>© 2026 SEEK DIGITAL SRL · Iași, România · CUI: — · Politică de confidențialitate</p>
          <p>Brand tag: {siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
