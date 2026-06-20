import { useCallback, useEffect, useRef, useState } from "react";

interface DriveVideoFrameProps {
  fileId: string;
  durationMs?: number;
}

export function DriveVideoFrame({ fileId, durationMs }: DriveVideoFrameProps) {
  const [src, setSrc] = useState(
    `https://drive.google.com/file/d/${fileId}/preview?autoplay=1&mute=1`,
  );
  const startTimeRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleReload = useCallback(() => {
    console.log("[DriveVideoFrame] scheduleReload called", { durationMs, startTime: startTimeRef.current });
    if (!durationMs || !startTimeRef.current) return;
    const elapsed = Date.now() - startTimeRef.current;
    const delay = Math.max(0, durationMs + 500 - elapsed);
    console.log("[DriveVideoFrame] scheduling reload in", delay, "ms");
    timeoutRef.current = setTimeout(() => {
      console.log("[DriveVideoFrame] reloading iframe");
      setSrc(
        `https://drive.google.com/file/d/${fileId}/preview?autoplay=1&mute=1&_=${Date.now()}`,
      );
    }, delay);
  }, [durationMs, fileId]);


  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    scheduleReload();
  }, [durationMs, scheduleReload]);

  return (
    <iframe
      title="Cogito philosophy video"
      src={src}
      allow="autoplay; encrypted-media"
      allowFullScreen
      className="h-full w-full"
      style={{ border: "none" }}
      onLoad={() => {
        console.log("[DriveVideoFrame] iframe loaded");
        startTimeRef.current = Date.now();
        scheduleReload();
      }}

    />
  );
}
