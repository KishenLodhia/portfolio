import { colorFor } from "@/lib/github";

interface LanguageBarProps {
  // Language name to weight (bytes, or repo count).
  data: Record<string, number>;
  unit?: (value: number, total: number) => string;
}

const percent = (value: number, total: number) => `${((value / total) * 100).toFixed(1)}%`;

// Stacked horizontal bar with a legend, in the style of GitHub's language breakdown.
const LanguageBar = ({ data, unit = percent }: LanguageBarProps) => {
  const entries = Object.entries(data).sort((a, b) => b[1] - a[1]);
  const total = entries.reduce((sum, [, value]) => sum + value, 0);
  if (!total) return null;

  return (
    <div>
      <div className="flex h-2.5 w-full gap-0.5 overflow-hidden rounded-full">
        {entries.map(([language, value]) => (
          <div
            key={language}
            title={`${language} ${percent(value, total)}`}
            style={{ width: `${(value / total) * 100}%`, backgroundColor: colorFor(language) }}
            className="min-w-1 first:rounded-l-full last:rounded-r-full"
          />
        ))}
      </div>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {entries.map(([language, value]) => (
          <li key={language} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: colorFor(language) }} />
            <span>{language}</span>
            <span className="text-muted-foreground">{unit(value, total)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageBar;
