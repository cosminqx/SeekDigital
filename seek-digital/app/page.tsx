import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "Home",
  description:
    "SEEK DIGITAL creează website-uri, branding, campanii și automatizări pentru afaceri care vor să crească mai rapid.",
  alternates: { canonical: "/" },
  openGraph: { images: ["/images/og-placeholder.svg"] },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <HomePage />;
}
