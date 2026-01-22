import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { WaitlistPage } from './pages/WaitlistPage';
import { ShowcasePage } from './pages/ShowcasePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { FAQPage } from './pages/FAQPage';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<WaitlistPage />} />
        <Route path="/app" element={<ShowcasePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
