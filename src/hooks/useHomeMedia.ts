import { useEffect, useState } from "react";
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
// files named hero.*, video.*/hero-video.* (we accept "video" or "hero-video"),
// and feature.*. Returns {} until loaded; consumers fall back to local assets.
export function useHomeMedia(): HomeMediaUrls {
  const [urls, setUrls] = useState<HomeMediaUrls>({});

  useEffect(() => {
    const ctrl = new AbortController();
    listDriveFolder(HOME_MEDIA_FOLDER_ID, ctrl.signal)
      .then((files) => {
        const idx = indexByBasename(files);
        const pick = (key: string, width?: number) =>
          idx[key] ? driveContentUrl(idx[key].id, width) : undefined;
        const videoFile = idx["video"] ?? idx["hero-video"];
        setUrls({
          hero: pick("hero", 1600),
          video: pick("video", 1600) ?? pick("hero-video", 1600),
          videoFileId: videoFile?.id,
          feature: pick("feature", 800) ?? pick("hero-feature", 800),
        });
      })
      .catch((err) => {
        if ((err as { name?: string }).name !== "AbortError") {
          // Silent fallback to local assets.
          console.warn("[home media] Drive fetch failed:", err);
        }
      });
    return () => ctrl.abort();
  }, []);

  return urls;
}