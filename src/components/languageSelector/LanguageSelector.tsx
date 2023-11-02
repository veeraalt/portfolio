import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const languages = [
    { value: "en", label: "English" },
    { value: "fi", label: "Suomi" },
  ];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return {
    currentLanguage,
    languages,
    changeLanguage,
  };
};
