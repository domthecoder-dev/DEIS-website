import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Web from './pages/services/Web.jsx';
import SEO from './pages/services/SEO.jsx';
import Hosting from './pages/services/Hosting.jsx';
import Password from './pages/services/Password.jsx';
import About from './pages/About.jsx';
import FAQ from './pages/FAQ.jsx';
import Quote from './pages/Quote.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import Projects from './pages/Projects.jsx';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router basename="/">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <ScrollToTop /> {/* ← This fixes it */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/web" element={<Web />} />
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/services/hosting" element={<Hosting />} />
            <Route path="/services/password" element={<Password />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;