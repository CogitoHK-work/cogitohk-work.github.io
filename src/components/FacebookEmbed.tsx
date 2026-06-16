import { useEffect, useRef, useState } from "react";
import { Facebook, ExternalLink } from "lucide-react";

export function FacebookEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Facebook iframe may fail if user isn't logged in — detect that
    const checkFailure = () => {
      const iframe = containerRef.current?.querySelector("iframe");
      if (iframe) {
        // If iframe exists but is tiny or empty, consider it failed
        // We can't inspect cross-origin iframe content, so we use a timeout
        setTimeout(() => {
          if (!loaded) setFailed(true);
        }, 6000);
      } else {
        // No iframe rendered by SDK
        setTimeout(() => setFailed(true), 4000);
      }
    };

    // Load Facebook SDK if not already loaded
    const existingScript = document.getElementById("facebook-jssdk") as HTMLScriptElement | null;
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.onload = () => {
        if ((window as any).FB) {
          (window as any).FB.XFBML.parse(containerRef.current);
        }
        checkFailure();
      };
      script.onerror = () => setFailed(true);
      document.body.appendChild(script);
    } else {
      if ((window as any).FB) {
        (window as any).FB.XFBML.parse(containerRef.current);
      }
      checkFailure();
    }
  }, [loaded]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-3xl border border-border shadow-elegant bg-card relative min-h-[500px]"
    >
      {/* Facebook Page Plugin (hidden if fallback shows) */}
      <div className={failed ? "hidden" : "block"}>
        <div
          className="fb-page"
          data-href="https://www.facebook.com/cogitohk"
          data-tabs="timeline"
          data-width="380"
          data-height="500"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/cogitohk"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/cogitohk">Cogito Hong Kong</a>
          </blockquote>
        </div>
      </div>

      {/* Fallback card when embed fails */}
      {failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-card">
          <div className="h-14 w-14 rounded-full bg-[#1877F2]/10 flex items-center justify-center mb-4">
            <Facebook className="h-7 w-7 text-[#1877F2]" />
          </div>
          <h3 className="font-display text-xl text-ink mb-2">Cogito Hong Kong</h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-[260px]">
            Follow us on Facebook for the latest updates, events, and learning tips.
          </p>
          <a
            href="https://www.facebook.com/cogitohk"
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
