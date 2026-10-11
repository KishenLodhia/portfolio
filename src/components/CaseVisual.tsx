import { Check, Sofa, Sparkles } from "lucide-react";
import shreejiWeb from "@/assets/shreeji-web.webp";
import evioleLogo from "@/assets/eviole-logo.webp";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/data/caseStudies";

// Illustrated product previews. Mock data only: no real customer or patient information.

const TruckitVisual = () => (
  <div className="relative grid h-full place-items-center bg-gradient-to-br from-sky-500/15 via-transparent to-brand/15 p-6 sm:p-10">
    <div className="grid w-full max-w-md grid-cols-[1fr_1.1fr] items-center gap-4">
      {/* Customer photo with AI measurement overlay */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border bg-gradient-to-b from-stone-300 to-stone-500 shadow-xl dark:from-stone-600 dark:to-stone-800">
        <Sofa className="absolute inset-0 m-auto h-1/2 w-1/2 text-stone-800/70 dark:text-stone-200/70" strokeWidth={1.25} />
        <div className="absolute inset-x-[14%] top-[30%] bottom-[30%] rounded-md border-2 border-dashed border-brand" />
        <span className="absolute left-1/2 top-[22%] -translate-x-1/2 rounded bg-black/70 px-1.5 py-0.5 font-mono text-[10px] text-white">
          184 cm
        </span>
        <span className="absolute right-[4%] top-1/2 -translate-y-1/2 rounded bg-black/70 px-1.5 py-0.5 font-mono text-[10px] text-white">
          85 cm
        </span>
        <div className="absolute inset-x-0 h-12 animate-scan bg-gradient-to-b from-transparent via-brand/40 to-transparent" />
      </div>

      {/* Prefilled quote form */}
      <div className="rounded-2xl border bg-background/90 p-4 shadow-xl backdrop-blur">
        <p className="mb-3 flex items-center gap-1.5 text-xs font-medium">
          <Sparkles className="h-3.5 w-3.5 text-brand" /> Get a quote
        </p>
        {[
          ["Item", "3-seat sofa"],
          ["Dimensions", "184 × 92 × 85 cm"],
          ["Quantity", "1"],
        ].map(([label, value]) => (
          <div key={label} className="mb-2">
            <p className="text-[10px] text-muted-foreground">{label}</p>
            <p className="rounded-md border border-brand/40 bg-brand/10 px-2 py-1 text-xs">{value}</p>
          </div>
        ))}
        <div className="mt-3 rounded-full bg-foreground py-1.5 text-center text-xs font-medium text-background">
          Continue
        </div>
      </div>
    </div>
  </div>
);

const ShreejiVisual = () => (
  <div className="relative h-full bg-gradient-to-br from-amber-700/25 via-amber-500/5 to-transparent p-6 sm:p-10">
    {/* Website in a browser frame */}
    <div className="overflow-hidden rounded-xl border bg-card shadow-2xl">
      <div className="flex items-center gap-1.5 border-b px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
        <span className="ml-2 truncate rounded bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
          shreeji-web.vercel.app
        </span>
      </div>
      <img src={shreejiWeb} alt="Shreeji Jewellers website" loading="lazy" className="aspect-[16/10] w-full object-cover object-top" />
    </div>

    {/* POS receipt card */}
    <div className="absolute bottom-4 right-4 w-44 rounded-xl border bg-background/95 p-3 text-[10px] shadow-2xl backdrop-blur sm:bottom-6 sm:right-6 sm:w-52">
      <p className="mb-2 flex items-center justify-between font-medium">
        <span>POS · Sale complete</span>
        <Check className="h-3.5 w-3.5 text-brand" />
      </p>
      {[
        ["22ct gold bangle", "$1,240"],
        ["Trade-in credit", "−$310"],
      ].map(([item, price]) => (
        <p key={item} className="flex justify-between text-muted-foreground">
          <span>{item}</span>
          <span>{price}</span>
        </p>
      ))}
      <p className="mt-1.5 flex justify-between border-t pt-1.5 font-medium">
        <span>Total (VAT incl.)</span>
        <span>$930</span>
      </p>
      <p className="mt-2 font-mono text-muted-foreground">✍︎ Signed · PDF sent</p>
    </div>
  </div>
);

const EvioleVisual = () => (
  <div className="relative grid h-full place-items-center bg-gradient-to-br from-emerald-700/25 via-transparent to-teal-500/10 p-6">
    <div className="relative w-44 rounded-[2rem] border-4 border-foreground/80 bg-background p-2 shadow-2xl sm:w-52">
      <div className="mx-auto mb-2 h-1.5 w-12 rounded-full bg-foreground/20" />
      <div className="overflow-hidden rounded-[1.4rem] bg-gradient-to-b from-[#5b8f80] to-[#36463f] p-3 text-white">
        <img src={evioleLogo} alt="Eviole" className="mx-auto h-10 w-10 rounded-lg" />
        <p className="mt-3 text-[10px] opacity-80">Weight progress</p>
        <svg viewBox="0 0 120 50" className="mt-1 w-full">
          <polyline
            points="0,8 15,12 30,14 45,20 60,22 75,28 90,31 105,36 120,40"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline points="0,8 15,12 30,14 45,20 60,22 75,28 90,31 105,36 120,40 120,50 0,50" fill="white" fillOpacity="0.12" />
        </svg>
        <div className="mt-3 grid grid-cols-2 gap-1.5 text-[10px]">
          {[
            ["Week", "12"],
            ["Waist", "−6 cm"],
            ["Check-in", "Done"],
            ["Photos", "4"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-white/15 p-1.5">
              <p className="opacity-70">{label}</p>
              <p className="font-medium">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute right-[8%] top-[14%] hidden rounded-xl border bg-background/95 px-3 py-2 font-mono text-[10px] shadow-xl sm:block">
      <span className="text-brand">PUT</span> /api/v2/partner/enrollments
    </div>
  </div>
);

const visuals: Record<CaseStudy["visual"], () => React.JSX.Element> = {
  truckit: TruckitVisual,
  shreeji: ShreejiVisual,
  eviole: EvioleVisual,
};

const CaseVisual = ({ visual, className }: { visual: CaseStudy["visual"]; className?: string }) => {
  const Visual = visuals[visual];
  return (
    <div className={cn("relative aspect-[4/3] overflow-hidden rounded-2xl border bg-card", className)}>
      <Visual />
    </div>
  );
};

export default CaseVisual;
