import { Outlet, Link, createRootRoute, HeadContent } from "@tanstack/react-router";
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Cogito Education 夏恩教育",
          alternateName: [
            "Cogito Education",
            "Cogito Education HK",
            "Cogito HK",
            "夏恩教育",
            "夏恩蔡老師",
            "蔡老師",
            "Shane Grace Choi Education",
          ],
          url: "https://cogito.edu.hk/",
          description:
            "Cogito Education 夏恩教育 — Hong Kong tutorial centre offering small-group tutorials with AI-personalised learning in English, Mathematics, and Chinese.",
          areaServed: "Hong Kong",
          address: {
            "@type": "PostalAddress",
            addressCountry: "HK",
            addressRegion: "Hong Kong",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+852-8128-8686",
            contactType: "customer service",
            availableLanguage: ["English", "Chinese"],
          },
          sameAs: [
            "https://www.facebook.com/p/%E5%A4%8F%E6%81%A9%E8%94%A1%E8%80%81%E5%B8%AB-Shane-Grace-Choi-Education-100063495683700/",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Cogito Education 夏恩教育",
          alternateName: ["Cogito HK", "夏恩教育"],
          url: "https://cogito.edu.hk/",
          inLanguage: ["en-HK", "zh-HK"],
        }),
      },
    ],
  }),
  notFoundComponent: NotFoundRoot,
});

function RootComponent() {
  return (
    <LanguageProvider>
      <HeadContent />
      <Outlet />
    </LanguageProvider>
  );
}

