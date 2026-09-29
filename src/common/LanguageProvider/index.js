import {
  createContext,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const LANG_MAP = { English: "en", Polish: "pl", Spanish: "es" };

const LanguageContext = createContext({
  language: "English",
  setLanguage: () => {},
});

export const LanguageProvider = ({ children, initialLanguage = "English" }) => {
  const [language, setLanguageState] = useState(() => {
    const stored = localStorage.getItem("language");
    return LANG_MAP[stored] ? stored : initialLanguage;
  });

  // A switch re-renders every useContent consumer — ~1.5 s under throttle.
  // Transition keeps the page responsive while React repaints all copy.
  const setLanguage = useCallback(
    (lang) => startTransition(() => setLanguageState(lang)),
    []
  );

  useEffect(() => {
    document.documentElement.lang = LANG_MAP[language] || "en";
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
