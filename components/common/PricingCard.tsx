import { Check, X } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type FeatureItem = {
  label: string;
  included: boolean;
};

type PricingCardProps = {
  tier: string;
  price: string;
  features: FeatureItem[];
  highlighted?: boolean;
  cta: string;
  href: string;
  badge?: string;
};

export default function PricingCard({ tier, price, features, highlighted, cta, href, badge }: PricingCardProps) {
  return (
    <Card
      className={cn(
        "flex h-full flex-col transition duration-300 hover:-translate-y-2 hover:glass-shadow-lg",
        highlighted
          ? "border-seek glass-signal shadow-[inset_0_0_20px_rgba(21,22,103,0.08)]"
          : "glass-effect",
      )}
    >
      <CardHeader className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="text-2xl uppercase tracking-[-0.03em] text-white">{tier}</CardTitle>
            <CardDescription className="mt-2 text-3xl font-bold text-seek-violet">{price}</CardDescription>
          </div>
          {badge ? <Badge variant="accent">{badge}</Badge> : null}
        </div>
      </CardHeader>
      <CardContent className="flex-1 space-y-4 px-6 pb-6">
        <ul className="space-y-3 text-sm leading-6 text-white">
          {features.map((feature) => (
            <li key={feature.label} className="flex items-start gap-3">
                {feature.included ? (
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-seek-violet" />
              ) : (
                <X className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
              )}
              <span className={cn(feature.included ? "text-white" : "text-muted")}>{feature.label}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button asChild className={cn("w-full", highlighted && "bg-seek-violet text-white hover:bg-seek-violet-glow")}> 
          <Link href={href}>{cta}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
