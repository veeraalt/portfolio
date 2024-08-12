import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const languages = [
    { value: "en", label: "English" },
    { value: "fi", label: "Suomi" },
  ];

  // Helper function to store language in local storage
  const storeLanguage = (lang: string) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lang", lang);
    }
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    storeLanguage(lang);
  };

  /* Set correct lang attribute and title to the html on first render and when
   * language is changed */
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.title = t("common.title");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  return {
    currentLanguage,
    languages,
    changeLanguage,
  };
};
