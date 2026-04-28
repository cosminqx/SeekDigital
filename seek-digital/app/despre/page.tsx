import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "Despre",
  description:
    "Află povestea lui Silviu Chiscareanu și misiunea SEEK DIGITAL din Iași, România.",
  alternates: { canonical: "/despre" },
  openGraph: { images: ["/images/og-placeholder.svg"] },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <AboutPage />;
}
