// Google Drive public folder listing.
// IMPORTANT: This site is a static SPA, so the API key below is bundled into
// the client. Restrict the key in Google Cloud Console (HTTP referrers +
// Google Drive API only) to prevent abuse.
export const GOOGLE_DRIVE_API_KEY = "AIzaSyCXFqRXroBlz-leV0azx_TfeGcgM_xJAMw";

export type DriveFile = {
  id: string;
  name: string;
  mimeType: string;
  thumbnailLink?: string;
  webViewLink?: string;
  createdTime?: string;
};

export function extractFolderId(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;
  const folderMatch = trimmed.match(/\/folders\/([a-zA-Z0-9_-]+)/);
  if (folderMatch) return folderMatch[1];
  const idParam = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idParam) return idParam[1];
  if (/^[a-zA-Z0-9_-]{10,}$/.test(trimmed)) return trimmed;
  return null;
}

export async function listDriveFolder(
  folder: string,
): Promise<{ files: DriveFile[]; error: string | null }> {
  const folderId = extractFolderId(folder);
  if (!folderId) {
    return { files: [], error: "Could not read a folder ID from that link." };
  }
  const params = new URLSearchParams({
    q: `'${folderId}' in parents and trashed = false`,
    key: GOOGLE_DRIVE_API_KEY,
    fields: "files(id,name,mimeType,thumbnailLink,webViewLink,createdTime)",
    pageSize: "200",
    orderBy: "createdTime desc",
  });
  try {
    const res = await fetch(
      `https://www.googleapis.com/drive/v3/files?${params.toString()}`,
    );
    if (!res.ok) {
      if (res.status === 404) {
        return {
          files: [],
          error:
            "Folder not found. Make sure it is shared as 'Anyone with the link'.",
        };
      }
      return {
        files: [],
        error: `Google Drive returned ${res.status}. Check sharing settings and API key restrictions.`,
      };
    }
    const json = (await res.json()) as { files?: DriveFile[] };
    return { files: json.files ?? [], error: null };
  } catch {
    return { files: [], error: "Could not reach Google Drive." };
  }
}

export function driveImageUrl(fileId: string): string {
  // Direct image content, works for public files.
  return `https://lh3.googleusercontent.com/d/${fileId}=w1200`;
}