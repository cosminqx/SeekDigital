import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Te rugăm să completezi numele.").max(80),
  email: z.string().email("Adresa de email nu este validă."),
  phone: z.string().optional(),
  service: z.string().min(1, "Alege serviciul dorit."),
  budget: z.string().min(1, "Alege un buget estimat."),
  message: z.string().min(10, "Scrie câteva detalii despre proiect."),
  consent: z.boolean().refine((value) => value, {
    message: "Trebuie să fii de acord cu prelucrarea datelor.",
  }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
