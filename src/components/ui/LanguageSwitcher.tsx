import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './LanguageSwitcher.module.css';

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' }
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const getCurrentLanguage = () => {
    return i18n.language || 'en';
  };

  const handleLanguageChange = (langCode: string) => {
    const currentLang = getCurrentLanguage();
    if (currentLang === langCode) return;

    const currentPath = location.pathname;
    let newPath: string;

    // Remove existing language prefix if present
    const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}(\/|$)/, '/');

    if (langCode === 'en') {
      // For English, use root paths (no prefix)
      newPath = pathWithoutLang === '/' ? '/' : pathWithoutLang;
    } else {
      // For other languages, add language prefix
      newPath = `/${langCode}${pathWithoutLang}`;
      if (newPath.endsWith('/') && newPath !== `/${langCode}/`) {
        newPath = newPath.slice(0, -1);
      }
    }

    // Change language and navigate
    i18n.changeLanguage(langCode);
    navigate(newPath);
  };

  const currentLang = getCurrentLanguage();

  return (
    <div className={styles.switcher}>
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`${styles.langButton} ${
            currentLang === lang.code ? styles.active : ''
          }`}
          aria-label={`Switch to ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}