// Google Drive public folder integration for Home page media.
//
// The API key below is restricted in Google Cloud Console to:
//   - HTTP referrers: this site's domains only
//   - APIs: Google Drive API only
// so embedding it in the client bundle is safe.

export const GOOGLE_DRIVE_API_KEY = "AIzaSyCXFqRXroBlz-leV0azx_TfeGcgM_xJAMw";

// Public folder where Home media lives. Files inside must be shared
// "Anyone with the link can view". File lookup is by basename (without
// extension), so `hero.jpg`, `hero.png`, `hero.webp` all match key "hero".
export const HOME_MEDIA_FOLDER_ID = "13vQfQyh2AD80h3V3sjEVxY0dy1A1RPGU";

export type DriveFile = {
  id: string;
  name: string;
  mimeType: string;
};

export async function listDriveFolder(
  folderId: string,
  signal?: AbortSignal,
): Promise<DriveFile[]> {
  const url = new URL("https://www.googleapis.com/drive/v3/files");
  url.searchParams.set("q", `'${folderId}' in parents and trashed = false`);
  url.searchParams.set("fields", "files(id,name,mimeType)");
  url.searchParams.set("pageSize", "100");
  url.searchParams.set("key", GOOGLE_DRIVE_API_KEY);

  const res = await fetch(url.toString(), { signal });
  if (!res.ok) {
    throw new Error(`Drive list failed: ${res.status}`);
  }
  const data = (await res.json()) as { files?: DriveFile[] };
  return data.files ?? [];
}

// Direct content URL that works in <img> and <video> tags.
export function driveContentUrl(fileId: string, width = 1600): string {
  return `https://lh3.googleusercontent.com/d/${fileId}=w${width}`;
}

// Try to read the video duration from Google Drive metadata.
export async function getVideoDurationMillis(
  fileId: string,
  signal?: AbortSignal,
): Promise<number | undefined> {
  const url = new URL(`https://www.googleapis.com/drive/v3/files/${fileId}`);
  url.searchParams.set("fields", "videoMediaMetadata(durationMillis)");
  url.searchParams.set("key", GOOGLE_DRIVE_API_KEY);
  const res = await fetch(url.toString(), { signal });
  if (!res.ok) {
    return undefined;
  }
  const data = (await res.json()) as {
    videoMediaMetadata?: { durationMillis?: string };
  };
  const ms = data.videoMediaMetadata?.durationMillis;
  return ms ? Number(ms) : undefined;
}



// Build a basename-keyed lookup. "hero.jpg" -> "hero".
export function indexByBasename(files: DriveFile[]): Record<string, DriveFile> {
  const out: Record<string, DriveFile> = {};
  for (const f of files) {
    const dot = f.name.lastIndexOf(".");
    const key = (dot > 0 ? f.name.slice(0, dot) : f.name).toLowerCase();
    // First match wins; ignore later duplicates with same basename.
    if (!out[key]) out[key] = f;
  }
  return out;
}