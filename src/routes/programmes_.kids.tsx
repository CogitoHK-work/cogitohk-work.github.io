import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProgrammeDetail } from "@/components/site/ProgrammeDetail";
import { dict } from "@/i18n/dictionaries";

export const Route = createFileRoute("/programmes_/kids")({
  head: () => ({
    meta: [
      { title: `${dict.en.programmes.list[0].title} | ${dict.zh.programmes.list[0].title} — Cogito` },
      { name: "description", content: `${dict.en.programmes.list[0].intro}` },
      { property: "og:title", content: dict.en.programmes.list[0].title },
      { property: "og:description", content: dict.en.programmes.list[0].intro },
      { property: "og:url", content: "https://cogito.edu.hk/programmes/kids" },
    ],
    links: [{ rel: "canonical", href: "https://cogito.edu.hk/programmes/kids" }],
  }),
  component: () => (
    <SiteLayout>
      <ProgrammeDetail slug="kids" />
    </SiteLayout>
  ),
});