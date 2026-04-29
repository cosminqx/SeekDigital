"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MessageCircle, MapPinned, PhoneCall } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import RevealSection from "@/components/common/RevealSection";
import SectionHeader from "@/components/common/SectionHeader";
import { toast } from "@/components/ui/toast";
import { contactSchema, type ContactFormValues } from "@/lib/validations";
import { siteConfig, contactOptions } from "@/lib/site";

const fieldClassName =
  "w-full glass-effect-sm rounded-lg bg-blue-500/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-muted focus:border-blue-400/60 focus:glass-shadow-sm";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      service: "Website",
      budget: "2500–7500 lei",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => window.setTimeout(resolve, 800));
    reset();
    toast({
      title: "Mesaj trimis",
      description: "Am primit solicitarea ta și revenim în maximum 24h.",
    });
  };

  return (
    <div className="border-b border-blue-400/20">
      <RevealSection className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <SectionHeader
          eyebrow="Contact"
          title="Hai să vorbim"
          subtitle="Trimite-ne câteva detalii și îți răspundem cu o propunere clară, fără obligații inutile."
        />
      </RevealSection>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-40">
        <RevealSection className="space-y-6">
          <Card className="p-6">
            <p className="font-display text-xs uppercase tracking-[0.24em] text-accent">Date de contact</p>
            <div className="mt-6 space-y-4 text-sm text-white">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 transition hover:text-blue-400">
                <Mail className="h-4 w-4 text-blue-400" /> {siteConfig.email}
              </a>
              <a href={siteConfig.whatsapp} className="flex items-center gap-3 transition hover:text-blue-400">
                <MessageCircle className="h-4 w-4 text-blue-400" /> Scrie-ne pe WhatsApp
              </a>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 glass-effect-sm rounded-lg border-blue-400/20 px-3 py-2 text-xs uppercase tracking-[0.2em] text-muted">
              <span className="h-2 w-2 rounded-full bg-blue-400" /> Răspundem în maxim 24h
            </div>
          </Card>

          <Card className="p-6">
            <p className="font-display text-xs uppercase tracking-[0.24em] text-accent">WhatsApp</p>
            <p className="mt-4 text-sm leading-7 text-muted">
              Pentru o discuție rapidă, apasă butonul de mai jos și îți răspundem direct în conversație.
            </p>
            <Button asChild className="mt-6 w-full">
              <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
                Scrie-ne pe WhatsApp
              </a>
            </Button>
          </Card>

          <Card className="overflow-hidden p-0">
            <div className="border-b border-blue-400/20 px-6 py-4">
              <p className="font-display text-xs uppercase tracking-[0.24em] text-accent">Google Maps</p>
            </div>
            <div className="flex min-h-[280px] items-center justify-center bg-gradient-to-br from-blue-500/10 via-transparent to-blue-600/10 px-6 text-center text-sm text-muted">
              <div className="max-w-xs space-y-3">
                <MapPinned className="mx-auto h-8 w-8 text-blue-400" />
                <p>Iași, România</p>
                <p>Harta reală poate fi adăugată după configurarea contului Google Maps Embed.</p>
              </div>
            </div>
          </Card>
        </RevealSection>

        <RevealSection>
          <Card className="p-6 sm:p-8">
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm text-white">Nume complet *</span>
                  <input className={fieldClassName} placeholder="Nume și prenume" {...register("fullName")} />
                  {errors.fullName ? <p className="text-sm text-red-400">{errors.fullName.message}</p> : null}
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-white">Email *</span>
                  <input className={fieldClassName} placeholder="contact@firma.ro" {...register("email")} />
                  {errors.email ? <p className="text-sm text-red-400">{errors.email.message}</p> : null}
                </label>
              </div>

              <label className="block space-y-2">
                <span className="text-sm text-white">Telefon</span>
                <input className={fieldClassName} placeholder="07xx xxx xxx" {...register("phone")} />
                {errors.phone ? <p className="text-sm text-red-400">{errors.phone.message}</p> : null}
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm text-white">Serviciu dorit *</span>
                  <select className={fieldClassName} {...register("service")}>
                    {contactOptions.services.map((service) => (
                      <option key={service}>{service}</option>
                    ))}
                  </select>
                  {errors.service ? <p className="text-sm text-red-400">{errors.service.message}</p> : null}
                </label>
                <label className="space-y-2">
                  <span className="text-sm text-white">Buget estimat *</span>
                  <select className={fieldClassName} {...register("budget")}>
                    {contactOptions.budgets.map((budget) => (
                      <option key={budget}>{budget}</option>
                    ))}
                  </select>
                  {errors.budget ? <p className="text-sm text-red-400">{errors.budget.message}</p> : null}
                </label>
              </div>

              <label className="block space-y-2">
                <span className="text-sm text-white">Mesaj *</span>
                <textarea
                  className={`${fieldClassName} min-h-[160px] resize-none`}
                  placeholder="Spune-ne mai multe despre business-ul tău și obiectivele proiectului."
                  {...register("message")}
                />
                {errors.message ? <p className="text-sm text-red-400">{errors.message.message}</p> : null}
              </label>

              <label className="flex items-start gap-3 text-sm text-muted">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded-md border border-blue-400/30 bg-blue-500/10 text-blue-500 focus:ring-2 focus:ring-blue-500/50"
                  {...register("consent")}
                />
                <span>
                  Sunt de acord cu prelucrarea datelor.
                  {errors.consent ? <span className="mt-1 block text-red-400">{errors.consent.message}</span> : null}
                </span>
              </label>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Se trimite..." : "Trimite mesajul"}
              </Button>

              <div className="flex items-center gap-3 border-t border-blue-400/20 pt-5 text-xs uppercase tracking-[0.18em] text-muted">
                <PhoneCall className="h-4 w-4 text-blue-400" />
                Vei primi răspuns de la SEEK DIGITAL, nu de la un formular automat.
              </div>
            </form>
          </Card>
        </RevealSection>
      </div>
    </div>
  );
}
