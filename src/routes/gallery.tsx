import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { Settings2, ExternalLink, Loader2, RefreshCw } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { useLang } from "@/i18n/LanguageProvider";
import { listDriveFolder, driveImageUrl, type DriveFile } from "@/lib/drive";

const STORAGE_KEY = "cogito.driveFolderLink";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Cogito Education 夏恩教育" },
      {
        name: "description",
        content:
          "Photo and video gallery from Cogito Education — synced live from our Google Drive.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const { lang } = useLang();
  const t = lang === "zh"
    ? {
        title: "相簿",
        lead: "教室時光、學生作品和活動花絮，從我們的 Google Drive 即時更新。",
        empty: "尚未設定 Google Drive 資料夾。",
        emptyHint: "管理員：請點擊下方齒輪圖示，貼上公開資料夾的分享連結。",
        adminTitle: "管理員設定",
        pasteLabel: "Google Drive 公開資料夾連結",
        save: "儲存並載入",
        clear: "清除",
        loading: "載入中…",
        refresh: "重新整理",
        openOriginal: "在 Drive 開啟",
      }
    : {
        title: "Gallery",
        lead: "Classroom moments, student work, and event highlights — synced live from our Google Drive.",
        empty: "No Google Drive folder configured yet.",
        emptyHint:
          "Admin: click the gear icon below and paste the share link of a public Drive folder.",
        adminTitle: "Admin settings",
        pasteLabel: "Public Google Drive folder link",
        save: "Save & load",
        clear: "Clear",
        loading: "Loading…",
        refresh: "Refresh",
        openOriginal: "Open in Drive",
      };

  const [folderLink, setFolderLink] = useState<string>("");
  const [draft, setDraft] = useState<string>("");
  const [files, setFiles] = useState<DriveFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showAdmin, setShowAdmin] = useState(false);

  // Load saved folder link on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) ?? "";
    setFolderLink(saved);
    setDraft(saved);
  }, []);

  const load = useCallback(async (link: string) => {
    if (!link) {
      setFiles([]);
      setError(null);
      return;
    }
    setLoading(true);
    setError(null);
    const { files: fetched, error: err } = await listDriveFolder(link);
    setFiles(fetched);
    setError(err);
    setLoading(false);
  }, []);

  useEffect(() => {
    load(folderLink);
  }, [folderLink, load]);

  const onSave = () => {
    localStorage.setItem(STORAGE_KEY, draft.trim());
    setFolderLink(draft.trim());
    setShowAdmin(false);
  };

  const onClear = () => {
    localStorage.removeItem(STORAGE_KEY);
    setDraft("");
    setFolderLink("");
    setFiles([]);
    setError(null);
  };

  const images = files.filter((f) => f.mimeType.startsWith("image/"));
  const videos = files.filter((f) => f.mimeType.startsWith("video/"));
  const others = files.filter(
    (f) => !f.mimeType.startsWith("image/") && !f.mimeType.startsWith("video/"),
  );

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h1 className="font-display text-4xl md:text-5xl text-balance">
              {t.title}
            </h1>
            <p className="mt-4 max-w-2xl text-foreground/75 leading-relaxed">
              {t.lead}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {folderLink && (
              <button
                onClick={() => load(folderLink)}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                aria-label={t.refresh}
              >
                <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
                {t.refresh}
              </button>
            )}
            <button
              onClick={() => setShowAdmin((s) => !s)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              aria-label={t.adminTitle}
            >
              <Settings2 className="h-4 w-4" />
              {t.adminTitle}
            </button>
          </div>
        </div>

        {showAdmin && (
          <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-soft">
            <label className="block text-sm font-medium text-foreground/80">
              {t.pasteLabel}
            </label>
            <input
              type="url"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="https://drive.google.com/drive/folders/..."
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none"
            />
            <div className="mt-4 flex gap-3">
              <button
                onClick={onSave}
                className="inline-flex items-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-elegant hover:scale-[1.02] transition-transform"
              >
                {t.save}
              </button>
              <button
                onClick={onClear}
                className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {t.clear}
              </button>
            </div>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        {loading && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" /> {t.loading}
          </div>
        )}

        {!loading && error && (
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
            {error}
          </div>
        )}

        {!loading && !error && !folderLink && (
          <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center">
            <p className="text-lg text-foreground/80">{t.empty}</p>
            <p className="mt-2 text-sm text-muted-foreground">{t.emptyHint}</p>
          </div>
        )}

        {!loading && !error && folderLink && files.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center text-muted-foreground">
            {lang === "zh" ? "資料夾是空的。" : "This folder is empty."}
          </div>
        )}

        {images.length > 0 && (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {images.map((f) => (
              <a
                key={f.id}
                href={f.webViewLink}
                target="_blank"
                rel="noopener"
                className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted shadow-soft hover:shadow-elegant transition-shadow"
              >
                <img
                  src={driveImageUrl(f.id)}
                  alt={f.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (f.thumbnailLink && img.src !== f.thumbnailLink) {
                      img.src = f.thumbnailLink;
                    }
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="truncate text-xs text-white">{f.name}</p>
                </div>
              </a>
            ))}
          </div>
        )}

        {videos.length > 0 && (
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {videos.map((f) => (
              <a
                key={f.id}
                href={f.webViewLink}
                target="_blank"
                rel="noopener"
                className="block overflow-hidden rounded-2xl border border-border bg-card shadow-soft hover:shadow-elegant transition-shadow"
              >
                {f.thumbnailLink ? (
                  <img
                    src={f.thumbnailLink}
                    alt={f.name}
                    loading="lazy"
                    className="aspect-video w-full object-cover"
                  />
                ) : (
                  <div className="aspect-video w-full bg-muted" />
                )}
                <div className="p-4 flex items-center justify-between gap-3">
                  <p className="truncate text-sm font-medium">{f.name}</p>
                  <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0" />
                </div>
              </a>
            ))}
          </div>
        )}

        {others.length > 0 && (
          <ul className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
            {others.map((f) => (
              <li key={f.id}>
                <a
                  href={f.webViewLink}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-between gap-3 px-5 py-3 text-sm hover:bg-muted/40 transition-colors"
                >
                  <span className="truncate">{f.name}</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>
    </SiteLayout>
  );
}