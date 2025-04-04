import type React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.includes('en') ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={`
        fixed top-4 right-4 z-50 p-2 rounded-full transition-all duration-300
        w-12 h-12 overflow-hidden group flex items-center justify-center
        before:content-[''] before:absolute before:inset-0 before:bg-[url('/us-flag.svg')] before:bg-cover before:opacity-10
        after:content-[''] after:absolute after:inset-0 after:bg-[url('/br-flag.svg')] after:bg-cover after:opacity-10
        ${
          i18n.language.includes('en')
            ? 'before:translate-x-0 after:translate-x-full hover:before:translate-x-[-30%] hover:after:translate-x-[70%]'
            : 'before:translate-x-[-100%] after:translate-x-0 hover:before:translate-x-[-70%] hover:after:translate-x-[30%]'
        }
        before:transition-transform before:duration-300 after:transition-transform after:duration-300
        bg-white/5 hover:bg-white/10
      `}
      aria-label="Toggle language"
    >
      <Languages className="w-6 h-6 z-10 relative" />
    </button>
  );
};
