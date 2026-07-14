import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import {
  HOME_MEDIA_FOLDER_ID,
  driveContentUrl,
  indexByBasename,
  listDriveFolder,
} from "@/lib/drive";

export type HomeMediaUrls = {
  hero?: string;
  video?: string;
  videoFileId?: string;
  feature?: string;
};

// Fetches the public Drive folder once and resolves URLs for
// files named hero-portrait.*, philosophy-video-*.mp4, and name-card.*.
// Returns {} until loaded; consumers fall back to local assets.
export function useHomeMedia(): HomeMediaUrls {
  const [urls, setUrls] = useState<HomeMediaUrls>({});
  const { lang } = useLang();

  useEffect(() => {
    const ctrl = new AbortController();
    listDriveFolder(HOME_MEDIA_FOLDER_ID, ctrl.signal)
      .then((files) => {
        const idx = indexByBasename(files);
        const pick = (key: string, width?: number) =>
          idx[key] ? driveContentUrl(idx[key].id, width) : undefined;
        const videoKeys =
          lang === "zh"
            ? ["philosophy-video-chinese", "philosoply-video-chinese"]
            : ["philosophy-video-english", "philosoply-video-english"];
        const videoKey = videoKeys.find((k) => idx[k]) ?? videoKeys[0];
        const videoFile = idx[videoKey];
        setUrls({
          hero: pick("hero-portrait", 1600),
          video: pick(videoKey, 1600),
          videoFileId: videoFile?.id,
          feature: pick("name-card", 800),
        });
      })
      .catch((err) => {
        if ((err as { name?: string }).name !== "AbortError") {
          // Silent fallback to local assets.
          console.warn("[home media] Drive fetch failed:", err);
        }
      });
    return () => ctrl.abort();
  }, [lang]);

  return urls;
}