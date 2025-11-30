// src/pages/BlogPage.js (or src/components/BlogPage.js)
import React from 'react';
import { Link } from 'react-router-dom'; // For internal navigation
import './BlogPage.css'; // Import the CSS specific to this page

function BlogPage() {
  return (
    <main id="blog-main" className="blog-main">
      <section className="article-list">
        <article>
          <h2>
            {/* Link to the specific article page in React */}
            <Link to="/articles//blogs/mobile-first">Mobile-First is Here: Is Your Website Ready? (The Importance of Responsive Design)</Link>
          </h2>
          <p className="post-meta">Published on May 01, 2025 by DE Innovative Solutions</p>
          <p className="article-description">
            Imagine trying to navigate a desktop website on your phone – frustrating, right? In the mobile-first
            era, responsive design ensures
            your website looks and functions flawlessly, no matter the screen size. Are you delivering a
            positive mobile experience?
          </p>
          <Link to="/articles/blogs/mobile-first" className="read-more">Read More</Link>
        </article>

        <article>
          <h2>
            {/* Link to the specific article page in React */}
            <Link to="/articles/blogs/password-security">Lock It Down: Why Strong Passwords Are Your First Line of Defense</Link>
          </h2>
          <p className="post-meta">Published on April 29, 2025 by DE Innovative Solutions</p>
          <p className="article-description">Weak passwords are like leaving your front door wide open. Learn why strong, unique passwords are
            your first line of defense against online threats...</p>
          <Link to="/articles/blogs/password-security" className="read-more">Read More</Link>
        </article>
      </section>
    </main>
  );
}

export default BlogPage;