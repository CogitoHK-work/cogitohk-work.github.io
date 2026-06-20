import { useEffect, useState } from "react";
import {
  HOME_MEDIA_FOLDER_ID,
  driveContentUrl,
  getVideoDurationMillis,
  indexByBasename,
  listDriveFolder,
} from "@/lib/drive";

export type HomeMediaUrls = {
  hero?: string;
  video?: string;
  videoFileId?: string;
  videoDurationMillis?: number;
  feature?: string;
};

// Fetches the public Drive folder once and resolves URLs for
// files named hero-portrait.*, philosophy-video.*, and name-card.*.
// Returns {} until loaded; consumers fall back to local assets.
export function useHomeMedia(): HomeMediaUrls {
  const [urls, setUrls] = useState<HomeMediaUrls>({});

  useEffect(() => {
    const ctrl = new AbortController();
    listDriveFolder(HOME_MEDIA_FOLDER_ID, ctrl.signal)
      .then(async (files) => {
        const idx = indexByBasename(files);
        const pick = (key: string, width?: number) =>
          idx[key] ? driveContentUrl(idx[key].id, width) : undefined;
        const videoFile = idx["philosophy-video"];
        let videoDurationMillis: number | undefined;
        if (videoFile) {
          try {
            videoDurationMillis = await getVideoDurationMillis(
              videoFile.id,
              ctrl.signal,
            );
          } catch {
            // ignore; player will simply not loop
          }
        }
        setUrls({
          hero: pick("hero-portrait", 1600),
          video: pick("philosophy-video", 1600),
          videoFileId: videoFile?.id,
          videoDurationMillis,
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
  }, []);

  return urls;
}
