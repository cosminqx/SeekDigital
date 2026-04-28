"use client";

import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PricingCard from "@/components/common/PricingCard";
import RevealSection from "@/components/common/RevealSection";
import SectionHeader from "@/components/common/SectionHeader";
import { pricingFaq, packages } from "@/lib/site";

export default function PricingPage() {
  return (
    <div className="border-b border-[#222222]">
      <RevealSection className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <SectionHeader
          eyebrow="Pachete"
          title="Alege pachetul potrivit"
          subtitle="O structură simplă de prețuri care te ajută să alegi rapid fără să pierzi timp în discuții inutile."
        />
      </RevealSection>

      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-40">
        <RevealSection>
          <div className="grid gap-6 xl:grid-cols-4">
            {packages.map((tier, index) => (
              <PricingCard
                key={tier.tier}
                tier={tier.tier.toUpperCase()}
                price={tier.price}
                features={tier.features}
                cta={tier.cta}
                href="/contact"
                highlighted={index === 1}
                badge={index === 1 ? "Popular" : undefined}
              />
            ))}
          </div>
        </RevealSection>

        <RevealSection className="mt-20">
          <SectionHeader
            eyebrow="Întrebări frecvente"
            title="FAQ"
            subtitle="Întrebări care apar des înainte de semnarea unui proiect."
          />
          <div className="mt-10 max-w-3xl">
            <Accordion type="single" collapsible className="border-t border-[#222222]">
              {pricingFaq.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </RevealSection>

        <RevealSection className="mt-16 flex justify-center">
          <Link href="/contact" className="text-sm font-medium uppercase tracking-[0.24em] text-accent transition hover:text-parchment">
            Cere o ofertă personalizată →
          </Link>
        </RevealSection>
      </div>
    </div>
  );
}
