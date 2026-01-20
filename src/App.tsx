import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { WaitlistPage } from './pages/WaitlistPage';
import { ShowcasePage } from './pages/ShowcasePage';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<WaitlistPage />} />
        <Route path="/app" element={<ShowcasePage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
