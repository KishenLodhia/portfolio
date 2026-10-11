import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface PageShellProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
}

// Common page wrapper: sets the document title and the max-width content column.
const PageShell = ({ title, className, children, ...props }: PageShellProps) => {
  useEffect(() => {
    document.title = `${title} · Kishen Lodhia`;
  }, [title]);

  return (
    <main className={cn("relative mx-auto w-full max-w-5xl px-5 pb-24 pt-32 md:px-8", className)} {...props}>
      {children}
    </main>
  );
};

export default PageShell;
