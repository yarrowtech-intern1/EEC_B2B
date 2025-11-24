// App.jsx
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from './pages/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import TopBar from './components/TopBar';
import FeaturesPage from './pages/FeaturesPage';
import Benefits from './pages/Benefits';
import Modules from './pages/Modules';
import Gallery from './pages/Gallery';
import Career from './pages/Career';
import JobDetail from './pages/JobDetail';
import { AnimatePresence } from "framer-motion";
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import ScrollTopButton from './components/ScrollTopButton';
import TopProgressBar from './components/TopProgressBar';
import { useEffect } from 'react';
import NotFound from './pages/NotFound';
import TryOuts from './pages/TryOuts';

const App = () => {

  useEffect(() => {
    // Disable right click
    // const disableContextMenu = (e) => e.preventDefault();
    // document.addEventListener("contextmenu", disableContextMenu);

    // Disable text selection
    // document.addEventListener("selectstart", (e) => e.preventDefault());

    // Disable copy
    document.addEventListener("copy", (e) => e.preventDefault());

    // Disable common DevTools shortcuts
    const disableShortcuts = (e) => {
      if (
        // F12
        e.keyCode === 123 ||
        // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) ||
        // Ctrl+U (View Source)
        (e.ctrlKey && e.key.toUpperCase() === "U")
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", disableShortcuts);

    return () => {
      // document.removeEventListener("contextmenu", disableContextMenu);
      // document.removeEventListener("selectstart", (e) => e.preventDefault());
      document.removeEventListener("copy", (e) => e.preventDefault());
      document.removeEventListener("keydown", disableShortcuts);
    };
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
      <ScrollToTop />
      {/* Site-wide soft amber background (fixed) */}
      {/* <div className="min-h-screen font-sans text-slate-800 bg-gradient-to-b from-amber-50 via-amber-50 to-amber-100 bg-fixed selection:bg-amber-300/60 selection:text-slate-900"> */}
      <div className="min-h-screen font-sans text-slate-800 ">
        {/* faint radial auras for Raphaaa-soft feel */}
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute -top-40 -left-28 h-80 w-80 rounded-full bg-amber-300/25 blur-3xl" />
          <div className="absolute -bottom-52 -right-24 h-96 w-96 rounded-full bg-amber-200/25 blur-3xl" />
        </div>
        {/* <TopBar /> */}
        <TopProgressBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/careers/:slug" element={<JobDetail />} />
          <Route path="/terms-of-service" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/try-outs" element={<TryOuts />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
        <Footer />
        <ScrollTopButton anchorId="hero" />
      </div>
      </AnimatePresence>
    </Router>
  );
};

export default App;
