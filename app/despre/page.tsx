import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "Despre",
  description:
    "Cunoaște echipa SEEK DIGITAL — Silviu Chiscareanu, Podaru Iulia, Lăcătuș Cosmin și Mihalache Tudor. 4 cofondatori din Iași care digitalizează IMM-uri cu rezultate măsurabile.",
  alternates: { canonical: "/despre" },
  openGraph: {
    title: "Despre echipa SEEK DIGITAL",
    description:
      "4 cofondatori complementari din Iași: web development, design, marketing și sales — o agenție boutique construită pentru antreprenori locali.",
    images: ["/images/og-placeholder.svg"],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <AboutPage />;
}