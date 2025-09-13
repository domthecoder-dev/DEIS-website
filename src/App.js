// Updated App.js with Layout
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./compontents/Layout/Layout";
import ScrolltoTop from './compontents/scrolltop/scrolltop';
import HomePage from './pages/HomePage-files/Homepage';
import AboutUs from './pages/AboutPage-files/AboutPage';
import BookACall from './pages/BookCall-files/BookCall';
import WebDesign from './pages/WebDesign-files/WebDesign';
import SEO from './pages/SEO-files/SEO';
import Hosting from './pages/Hosting-files/Hosting';
import PassGenPage from './pages/PassGen-files/PassGen';
import BlogPage from './pages/Blog-files/BlogPage';
import Article1 from './pages/Blog-files/article1-files/article1';
import Article2 from './pages/Blog-files/article2-files/article2';
import FAQPage from './pages/FAQ-files/FAQ';

function App() {
  return (
      <Router>
        <ScrolltoTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/book-a-call" element={<BookACall />} />
            <Route path="/services/web-design" element={<WebDesign />} />
            <Route path="services/seo-optimization" element={<SEO />} />
            <Route path="/services/hosting" element={<Hosting />} />
            <Route path="/services/password-generators" element={<PassGenPage />} />
            <Route path="/articles/blogs" element={<BlogPage />} />
            <Route path="/articles/blogs/mobile-first" element={<Article1 />} />
            <Route path="/articles/blogs/password-security" element={<Article2 />} />
            <Route path="/articles/faq" element={<FAQPage />} />
          </Routes>
        </Layout>
      </Router>
  );
}

export default App;