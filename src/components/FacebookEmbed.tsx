import { useEffect, useRef } from "react";

const PAGE_URL =
  "https://www.facebook.com/p/%E5%A4%8F%E6%81%A9%E8%94%A1%E8%80%81%E5%B8%AB-Shane-Grace-Choi-Education-100063495683700/";

export function FacebookEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const parse = () => {
      if ((window as any).FB) {
        (window as any).FB.XFBML.parse(containerRef.current);
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
      document.body.appendChild(script);
    } else {
      parse();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-3xl border border-border shadow-elegant bg-card min-h-[500px]"
    >
      <div
        className="fb-page"
        data-href={PAGE_URL}
        data-tabs="timeline"
        data-width="380"
        data-height="500"
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
  );
}
