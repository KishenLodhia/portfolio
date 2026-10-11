import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import CaseVisual from "./CaseVisual";
import { caseStudies } from "@/data/caseStudies";
import { cn } from "@/lib/utils";

// Large alternating cards for flagship projects, each linking to its case study.
const FeaturedWork = () => (
  <div className="space-y-6">
    {caseStudies.map((study, index) => (
      <Reveal key={study.slug}>
        <Link
          to={`/work/${study.slug}`}
          className="group grid overflow-hidden rounded-3xl border bg-card transition-all duration-300 hover:border-foreground/20 hover:shadow-2xl hover:shadow-black/10 md:grid-cols-2"
        >
          <div className={cn("p-3", index % 2 === 1 && "md:order-2")}>
            <CaseVisual visual={study.visual} className="transition-transform duration-500 group-hover:scale-[1.015]" />
          </div>
          <div className="flex flex-col justify-center p-7 md:p-10">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {study.client} · {study.period}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">{study.name}</h3>
            <p className="mt-2 text-lg text-foreground/80">{study.tagline}</p>
            <div className="mt-6 grid grid-cols-2 gap-4 border-t pt-6">
              {study.stats.slice(0, 2).map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl font-semibold tracking-tight">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
              Read case study
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </Reveal>
    ))}
  </div>
);

export default FeaturedWork;
