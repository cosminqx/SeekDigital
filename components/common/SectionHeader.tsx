import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeader({ eyebrow, title, subtitle, align = "left" }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl space-y-4", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="font-display text-xs uppercase tracking-[0.28em] text-blue-400">{eyebrow}</p>
      ) : null}
      <div className="space-y-4">
        <h2 className="font-display text-4xl font-bold uppercase tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {subtitle ? <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">{subtitle}</p> : null}
      </div>
    </div>
  );
}
