import { useEffect, useRef, useState } from "react";
import { Facebook, ExternalLink } from "lucide-react";

const PAGE_URL =
  "https://www.facebook.com/p/%E5%A4%8F%E6%81%A9%E8%94%A1%E8%80%81%E5%B8%AB-Shane-Grace-Choi-Education-100063495683700/";
const EMBED_HEIGHT = 500;
const MIN_RENDERED_HEIGHT = 450;
const FALLBACK_DELAY_MS = 3000;

export function FacebookEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const host = containerRef.current;

    const parse = () => {
      if ((window as any).FB) {
        (window as any).FB.XFBML.parse(host);
      }
    };

    const existingScript = document.getElementById("facebook-jssdk") as HTMLScriptElement | null;
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.onload = parse;
      script.onerror = () => setFailed(true);
      document.body.appendChild(script);
    } else {
      parse();
    }

    // Detect a real timeline vs Facebook's blocked/login-wall iframe.
    // A blocked embed still reports state="rendered", but it settles around
    // ~331px tall instead of the requested 500px timeline.
    const timer = window.setTimeout(() => {
      const fbEl = host.querySelector(".fb-page") as HTMLElement | null;
      const span = fbEl?.querySelector("span") as HTMLElement | null;
      const iframe = fbEl?.querySelector("iframe") as HTMLIFrameElement | null;
      const spanHeight = span?.getBoundingClientRect().height ?? 0;
      const iframeHeight = iframe?.getBoundingClientRect().height ?? 0;
      const renderedHeight = Math.max(spanHeight, iframeHeight);
      const state = fbEl?.getAttribute("fb-xfbml-state");

      if (state !== "rendered" || renderedHeight < MIN_RENDERED_HEIGHT) {
        setFailed(true);
      }
    }, FALLBACK_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-3xl border border-border shadow-elegant bg-card relative min-h-[500px]"
    >
      <div className={failed ? "hidden" : "block"}>
        <div
          className="fb-page"
          data-href={PAGE_URL}
          data-tabs="timeline"
          data-width="380"
          data-height={EMBED_HEIGHT.toString()}
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote cite={PAGE_URL} className="fb-xfbml-parse-ignore">
            <a href={PAGE_URL}>夏恩蔡老師 Shane Grace Choi Education</a>
          </blockquote>
        </div>
      </div>

      {failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-card">
          <div className="h-14 w-14 rounded-full bg-[#1877F2]/10 flex items-center justify-center mb-4">
            <Facebook className="h-7 w-7 text-[#1877F2]" />
          </div>
          <h3 className="font-display text-xl text-ink mb-2">夏恩蔡老師 Shane Grace Choi Education</h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-[260px]">
            Follow on Facebook for the latest education updates and learning tips.
          </p>
          <a
            href={PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#166fe5] transition-colors"
          >
            <Facebook className="h-4 w-4" />
            Visit Facebook Page
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      )}
    </div>
  );
}
