"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-[70] border-b border-transparent transition-all duration-300",
        isScrolled ? "border-blue-400/20 glass-effect bg-gradient-to-b from-blue-500/5 to-transparent" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2" aria-label={siteConfig.name}>
          <span className="font-display text-sm font-bold uppercase tracking-[0.24em] text-white sm:text-base">
            SEEK <span className="text-blue-400 transition group-hover:opacity-80">•</span> DIGITAL
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-[0.08em] text-muted transition hover:text-blue-300"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="/contact">Hai să vorbim →</Link>
          </Button>
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={isOpen}
          className="inline-flex h-11 w-11 items-center justify-center glass-effect-sm rounded-lg text-white transition hover:bg-opacity-80 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/96 lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col px-6 py-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-xs uppercase tracking-[0.28em] text-muted">Meniu</span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Închide meniul"
                  className="inline-flex h-11 w-11 items-center justify-center glass-effect-sm rounded-lg text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-12 flex flex-1 flex-col justify-between">
                <div className="space-y-5">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block border-b border-blue-400/20 py-4 font-display text-3xl font-bold uppercase tracking-[-0.03em] text-white"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-4 pb-6">
                  <Button asChild className="w-full justify-center">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Hai să vorbim →
                    </Link>
                  </Button>
                  <p className="max-w-sm text-sm leading-6 text-muted">
                    {siteConfig.tagline} pentru afaceri care vor să crească rapid și măsurabil.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
