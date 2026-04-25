import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dict, type Dict, type Lang } from "./dictionaries";

const STORAGE_KEY = "cogito.lang";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // SSR-safe: default to English on the server, hydrate from localStorage on the client.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "zh") setLangState(stored);
    } catch {
      // ignore
    }
  }, []);

  // Update the <html lang> attribute when language changes (client only).
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
  };

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: dict[lang] }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

export function useT(): Dict {
  return useLang().t;
}
