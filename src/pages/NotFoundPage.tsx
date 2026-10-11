import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import PageShell from "@/components/PageShell";

const NotFoundPage = () => (
  <PageShell title="Not found" className="flex min-h-[80vh] flex-col items-center justify-center text-center">
    <p className="font-mono text-sm text-brand">404</p>
    <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">This page doesn't exist.</h1>
    <p className="mt-3 text-muted-foreground">It may have moved, or the link might be broken.</p>
    <Link
      to="/"
      className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
    >
      <ArrowLeft className="h-4 w-4" /> Back home
    </Link>
  </PageShell>
);

export default NotFoundPage;
