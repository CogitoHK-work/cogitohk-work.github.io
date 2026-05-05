import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { LanguageProvider, useT } from "@/i18n/LanguageProvider";

function NotFoundComponent() {
  const t = useT();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{t.notFound.title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t.notFound.lead}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.notFound.home}
          </Link>
        </div>
      </div>
    </div>
  );
}

function NotFoundRoot() {
  return (
    <LanguageProvider>
      <NotFoundComponent />
    </LanguageProvider>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  head: () => ({
    meta: [
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  notFoundComponent: NotFoundRoot,
});

function RootComponent() {
  useEffect(() => {
    // Apply per-route <title> / <meta> updates managed by route head() at runtime.
  }, []);
  return (
    <LanguageProvider>
      <Outlet />
    </LanguageProvider>
  );
}

