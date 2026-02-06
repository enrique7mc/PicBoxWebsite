import { Routes, Route, useLocation, useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { ShowcasePage } from './pages/ShowcasePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { FAQPage } from './pages/FAQPage';

// Component wrapper to handle language from URL
function LanguageWrapper({ children }: { children: React.ReactNode }) {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    const urlLang = lang || 'en'; // Default to English if no language in URL
    if (i18n.language !== urlLang) {
      i18n.changeLanguage(urlLang);
    }
  }, [lang, i18n]);

  return <>{children}</>;
}

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Default English routes */}
        <Route path="/" element={<ShowcasePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/faq" element={<FAQPage />} />

        {/* Language-prefixed routes */}
        <Route path="/:lang/*" element={
          <LanguageWrapper>
            <Routes>
              <Route path="/" element={<ShowcasePage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/faq" element={<FAQPage />} />
            </Routes>
          </LanguageWrapper>
        } />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
