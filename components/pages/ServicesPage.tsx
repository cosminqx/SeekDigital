"use client";

import Link from "next/link";
import {
  BarChart2,
  Sparkles,
  Globe,
  Palette,
  ShoppingBag,
  Target,
  Zap,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/common/SectionHeader";
import RevealSection from "@/components/common/RevealSection";
import { detailedServices } from "@/lib/site";

const icons = [Globe, ShoppingBag, Target, BarChart2, Palette, Zap, ShoppingBag, Sparkles];

export default function ServicesPage() {
  return (
    <div className="border-b border-[#222222]">
      <RevealSection className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <SectionHeader
          eyebrow="Servicii"
          title="Serviciile noastre"
          subtitle="Tot ce ai nevoie pentru a-ți construi și crește prezența digitală, în pachete clare și ușor de înțeles."
        />
      </RevealSection>

      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-40">
        <div className="grid gap-6">
          {detailedServices.map((service, index) => {
            const Icon = icons[index];

            return (
              <RevealSection key={service.title}>
                <Card className="overflow-hidden bg-card">
                  <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="border-b border-[#222222] p-8 lg:border-b-0 lg:border-r">
                      <div className="flex items-start justify-between gap-4">
                        <div className="inline-flex h-14 w-14 items-center justify-center border border-[#222222] bg-white/5 text-accent">
                          <Icon className="h-6 w-6" />
                        </div>
                        <Badge variant="outline">{service.delivery}</Badge>
                      </div>
                      <h2 className="mt-8 font-display text-3xl font-bold uppercase tracking-[-0.03em] text-parchment sm:text-4xl">
                        {service.title}
                      </h2>
                      <p className="mt-5 max-w-xl text-base leading-8 text-muted">{service.description}</p>
                      <div className="mt-8 flex flex-wrap gap-3">
                        <Badge variant="accent">{service.price}</Badge>
                        <Badge variant="outline">Livrare: {service.delivery}</Badge>
                      </div>
                    </div>
                    <div className="p-8">
                      <p className="font-display text-xs uppercase tracking-[0.24em] text-accent">Ce livrăm</p>
                      <ul className="mt-5 space-y-3 text-sm leading-7 text-parchment">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 border-t border-[#222222] pt-6">
                        <Accordion type="single" collapsible>
                          <AccordionItem value={service.title}>
                            <AccordionTrigger>Ce include?</AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-3">
                                {service.faq.map((item) => (
                                  <li key={item} className="flex items-start gap-3">
                                    <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                </Card>
              </RevealSection>
            );
          })}
        </div>

        <RevealSection className="mt-16 flex justify-center">
          <Button asChild size="lg">
            <Link href="/contact">Hai să discutăm proiectul tău</Link>
          </Button>
        </RevealSection>
      </div>
    </div>
  );
}
