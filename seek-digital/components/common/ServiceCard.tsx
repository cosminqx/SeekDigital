import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  href: string;
};

export default function ServiceCard({ icon: Icon, title, description, price, href }: ServiceCardProps) {
  return (
    <Card className="group h-full bg-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_#C8FF00]">
      <CardHeader className="space-y-5 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex h-12 w-12 items-center justify-center border border-[#1f1f1f] bg-white/5 text-accent transition group-hover:border-accent">
            <Icon className="h-5 w-5" />
          </div>
          <Badge variant="outline" className="whitespace-nowrap">
            {price}
          </Badge>
        </div>
        <CardTitle className="text-2xl tracking-[-0.03em] text-white">{title}</CardTitle>
        <CardDescription className="text-sm leading-7 text-muted">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="px-6 pb-6 pt-0">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-medium text-white transition group-hover:text-accent"
        >
          Vezi detalii <ArrowRight className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
