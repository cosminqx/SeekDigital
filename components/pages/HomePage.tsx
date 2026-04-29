"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart2,
  Check,
  Globe,
  Palette,
  ShoppingBag,
  Target,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/common/AnimatedCounter";
import MarqueeTicker from "@/components/common/MarqueeTicker";
import PricingCard from "@/components/common/PricingCard";
import RevealSection from "@/components/common/RevealSection";
import SectionHeader from "@/components/common/SectionHeader";
import ServiceCard from "@/components/common/ServiceCard";
import { fadeInUp, stagger, wordReveal } from "@/lib/animations";
import { cn } from "@/lib/utils";
import {
  differentiators,
  packages,
  processSteps,
  serviceCards,
  siteConfig,
} from "@/lib/site";

const serviceIcons = [Globe, ShoppingBag, Target, BarChart2, Palette, Zap];

function SplitHeadline({ text }: { text: string }) {
  return (
    <motion.span variants={stagger} initial="hidden" animate="visible" className="block">
      {text.split(" ").map((word, index) => (
        <motion.span key={`${word}-${index}`} variants={wordReveal} className="mr-4 inline-block last:mr-0">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-seek">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_32%),radial-gradient(circle_at_75%_20%,_rgba(30,144,255,0.1),_transparent_26%),radial-gradient(circle_at_50%_80%,_rgba(100,150,255,0.08),_transparent_24%)]" />
        <motion.div
          className="mesh-blob absolute -left-24 top-16 h-72 w-72 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(21,22,103,0.15)" }}
          animate={{ x: [0, 32, -18, 0], y: [0, -18, 26, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="mesh-blob mesh-blob-delay absolute right-0 top-24 h-80 w-80 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(21,22,103,0.10)" }}
          animate={{ x: [0, -22, 18, 0], y: [0, 20, -16, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="mesh-blob mesh-blob-delay-2 absolute bottom-0 left-1/3 h-96 w-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(79,70,229,0.10)" }}
          animate={{ x: [0, 18, -10, 0], y: [0, -12, 24, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-between px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:py-16">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-8">
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3">
                <Badge variant="accent">Iași, România</Badge>
                <Badge variant="outline">SEEK DIGITAL</Badge>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="max-w-4xl font-display text-[clamp(3rem,7vw,5.25rem)] font-bold uppercase leading-[0.92] tracking-[-0.03em] text-white"
              >
                <SplitHeadline text="Digitalizăm" />
                <SplitHeadline text="afacerea" />
                <SplitHeadline text="ta." />
              </motion.h1>

              <motion.p variants={fadeInUp} className="max-w-xl text-lg leading-8 text-muted sm:text-xl">
                Website-uri profesionale, campanii de marketing și automatizări pentru IMM-uri — livrate rapid, cu ROI măsurabil.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">Solicită ofertă gratuită</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/servicii">Vezi serviciile</Link>
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid gap-4 sm:grid-cols-3">
                <div className="glass-effect glass-shadow-sm rounded-lg border-seek bg-seek-glass p-5">
                  <AnimatedCounter target={14} prefix="7–" suffix=" zile" />
                  <p className="mt-3 text-sm text-muted">livrare website</p>
                </div>
                <div className="glass-effect glass-shadow-sm rounded-lg border-seek bg-seek-glass p-5">
                  <AnimatedCounter target={50} prefix="30–" suffix="%" />
                  <p className="mt-3 text-sm text-muted">prețuri mai mici față de agenții mari</p>
                </div>
                <div className="glass-effect glass-shadow-sm rounded-lg border-seek bg-seek-glass p-5">
                  <AnimatedCounter target={100} suffix="%" />
                  <p className="mt-3 text-sm text-muted">ROI măsurabil, garantat prin contract</p>
                </div>
              </motion.div>
            </div>

            <motion.aside variants={fadeInUp} className="space-y-6">
              <div className="glass-effect glass-shadow-lg rounded-lg border-seek p-6">
                <p className="font-display text-xs uppercase tracking-[0.28em] text-accent">Boutique agency</p>
                <div className="mt-4 space-y-3">
                  <p className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-white">
                    <span className="text-seek-violet">SEEK</span> DIGITAL
                  </p>
                  <p className="text-sm leading-7 text-muted">
                    Lucrăm direct cu fondatorul Silviu Chiscareanu pentru proiecte care cresc în trafic, leads și venit.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3 text-sm text-white">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {siteConfig.tagline}
                </div>
              </div>

              <div className="glass-effect glass-shadow-sm rounded-lg border-seek p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-muted">Focus</p>
                <ul className="mt-4 space-y-3 text-sm text-white">
                  {[
                    "Website-uri care convertesc",
                    "Campanii cu raportare clară",
                    "Automatizări care economisesc timp",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 text-seek-violet" />
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>
          </motion.div>
        </div>

        <MarqueeTicker items={["WEBSITE", "BRANDING", "META ADS", "GOOGLE ADS", "E-COMMERCE", "AUTOMATIZĂRI", "SEO"]} />
      </section>

      <RevealSection className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 lg:py-40">
        <SectionHeader
          eyebrow="Servicii"
          title="Ce facem pentru tine"
          subtitle="Livrăm piese esențiale pentru creștere digitală, într-un proces scurt și clar."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <ServiceCard
                key={service.title}
                icon={Icon}
                title={service.title}
                description={service.description}
                price={service.price}
                href="/servicii"
              />
            );
          })}
        </div>
      </RevealSection>

      <RevealSection className="border-y border-seek bg-surface px-4 py-32 sm:px-6 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="De ce SEEK DIGITAL" title="Diferențiatori care contează" subtitle="Nu cumpăra mai multă agendă, cumpără un proces mai bun." />
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item.number} className="relative overflow-hidden glass-effect glass-shadow-md rounded-lg border-seek p-8 lg:p-10 transition-all duration-300 hover:glass-shadow-lg">
                <p className="absolute -left-4 -top-8 select-none font-display text-[clamp(7rem,14vw,9rem)] font-bold uppercase leading-none tracking-[-0.03em]" style={{ color: 'rgba(21,22,103,0.05)' }}>
                  {item.number}
                </p>
                <div className="relative z-10 max-w-xl space-y-4">
                  <p className="font-display text-xs uppercase tracking-[0.24em] text-accent">{item.number}</p>
                  <h3 className="font-display text-3xl font-bold uppercase tracking-[-0.03em] text-white">{item.title}</h3>
                  <p className="text-lg leading-8 text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 lg:py-40">
        <SectionHeader eyebrow="Pachete" title="Alege pachetul potrivit" subtitle="Trei direcții clare pentru firme aflate în etape diferite de creștere." />
        <div className="mt-16 grid gap-6 xl:grid-cols-3">
          {packages.map((tier, index) => (
            <PricingCard
              key={tier.tier}
              tier={tier.tier.toUpperCase()}
              price={tier.price}
              features={tier.features}
              cta="Vezi detaliile"
              href="/pachete"
              highlighted={index === 1}
              badge={index === 1 ? "Cel mai popular" : undefined}
            />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline">
            <Link href="/pachete">
              Vezi toate pachetele <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </RevealSection>

      <RevealSection className="border-y border-seek bg-surface px-4 py-32 sm:px-6 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Proces" title="Cum lucrăm" subtitle="Un proces simplu, previzibil și ușor de urmărit de la brief până la lansare." />
          <div className="mt-16 work-grid">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className={cn(
                  "work-item morph-hover bg-reactive glass-effect glass-shadow-md rounded-lg border-seek p-6 transition-all duration-300",
                  index === 0 && "border-seek shadow-[inset_0_0_20px_rgba(21,22,103,0.10)] glass-signal",
                )}
              >
                <div
                  className={cn(
                    "inline-flex h-12 w-12 items-center justify-center rounded-full border text-sm font-bold transition-all duration-300",
                    index === 0 ? "border-seek glass-signal text-seek-plasma bg-[rgba(21,22,103,0.30)]" : "border-seek text-white bg-seek-glass",
                  )}
                >
                  {step.step}
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute inset-0 blur-3xl" style={{ background: 'linear-gradient(90deg, rgba(79,70,229,0.20) 0%, transparent 50%, rgba(21,22,103,0.18) 100%)' }} />
        <div className="mx-auto flex max-w-7xl flex-col gap-8 relative z-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="font-display text-xs uppercase tracking-[0.28em] text-seek-violet">Call to action</p>
            <h2 className="font-display text-[clamp(2.5rem,6vw,4rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em] text-white">
              Gata să creștem împreună?
            </h2>
            <p className="text-lg leading-8 text-muted">Primești o analiză gratuită a prezenței tale online în 24h.</p>
          </div>
          <Button asChild size="lg">
            <Link href="/contact">Contactează-ne acum</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
