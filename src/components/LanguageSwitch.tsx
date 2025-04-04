import type React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 p-2 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300"
      aria-label="Toggle language"
    >
      <Languages className="w-6 h-6" />
    </button>
  );
};
