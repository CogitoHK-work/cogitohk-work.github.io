import { useEffect, useRef } from "react";

export function FacebookEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Load Facebook SDK if not already loaded
    const existingScript = document.getElementById("facebook-jssdk") as HTMLScriptElement | null;
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    } else if ((window as any).FB) {
      // SDK already loaded, parse the new element
      (window as any).FB.XFBML.parse(containerRef.current);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-3xl border border-border shadow-elegant bg-card"
    >
      <div
        className="fb-page"
        data-href="https://www.facebook.com/100063495683700"
        data-tabs="timeline"
        data-width="380"
        data-height="500"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/100063495683700"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/100063495683700">Facebook</a>
        </blockquote>
      </div>
    </div>
  );
}
