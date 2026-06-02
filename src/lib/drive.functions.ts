import { createServerFn } from "@tanstack/react-start";

export type DriveFile = {
  id: string;
  name: string;
  mimeType: string;
  thumbnailLink?: string;
  webViewLink?: string;
  createdTime?: string;
};

function extractFolderId(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;
  // Already an ID (no slashes)
  if (!trimmed.includes("/") && !trimmed.includes("?")) return trimmed;
  const folderMatch = trimmed.match(/\/folders\/([a-zA-Z0-9_-]+)/);
  if (folderMatch) return folderMatch[1];
  const idParam = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idParam) return idParam[1];
  return null;
}

export const listDriveFolder = createServerFn({ method: "POST" })
  .inputValidator((data: { folder: string }) => {
    if (!data || typeof data.folder !== "string") {
      throw new Error("folder is required");
    }
    if (data.folder.length > 500) throw new Error("folder too long");
    return data;
  })
  .handler(async ({ data }) => {
    const apiKey = process.env.GOOGLE_DRIVE_API_KEY;
    if (!apiKey) {
      return { files: [] as DriveFile[], error: "Server is missing GOOGLE_DRIVE_API_KEY." };
    }
    const folderId = extractFolderId(data.folder);
    if (!folderId) {
      return { files: [] as DriveFile[], error: "Could not read a folder ID from that link." };
    }

    const params = new URLSearchParams({
      q: `'${folderId}' in parents and trashed = false`,
      key: apiKey,
      fields: "files(id,name,mimeType,thumbnailLink,webViewLink,createdTime)",
      pageSize: "200",
      orderBy: "createdTime desc",
    });

    const url = `https://www.googleapis.com/drive/v3/files?${params.toString()}`;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        const body = await res.text();
        console.error("Drive API error", res.status, body);
        return {
          files: [] as DriveFile[],
          error:
            res.status === 404
              ? "Folder not found. Make sure it is shared as 'Anyone with the link'."
              : `Google Drive returned ${res.status}. Check that the folder is public and the API key is valid.`,
        };
      }
      const json = (await res.json()) as { files?: DriveFile[] };
      return { files: json.files ?? [], error: null };
    } catch (err) {
      console.error("Drive fetch failed", err);
      return { files: [] as DriveFile[], error: "Could not reach Google Drive." };
    }
  });