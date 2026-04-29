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
    <Card className="group h-full glass-effect glass-shadow-md transition duration-300 hover:-translate-y-2 hover:glass-shadow-lg hover:bg-opacity-60">
      <CardHeader className="space-y-5 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex h-12 w-12 items-center justify-center glass-effect-sm text-accent transition group-hover:bg-opacity-80 group-hover:shadow-[inset_0_0_20px_rgba(59,130,246,0.2)]">
            <Icon className="h-5 w-5" />
          </div>
          <Badge variant="outline" className="whitespace-nowrap bg-blue-500/10 text-blue-300 border-blue-400/30">
            {price}
          </Badge>
        </div>
        <CardTitle className="text-2xl tracking-[-0.03em] text-white">{title}</CardTitle>
        <CardDescription className="text-sm leading-7 text-muted">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="px-6 pb-6 pt-0">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition group-hover:text-blue-200"
        >
          Vezi detalii <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}
