import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

const SectionHeading = ({ eyebrow, title, description, className }: SectionHeadingProps) => (
  <Reveal className={cn("mb-10 max-w-2xl", className)}>
    <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
    <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-pretty text-muted-foreground">{description}</p>}
  </Reveal>
);

export default SectionHeading;
