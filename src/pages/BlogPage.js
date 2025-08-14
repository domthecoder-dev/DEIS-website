// src/pages/BlogPage.js (or src/components/BlogPage.js)
import React from 'react';
import { Link } from 'react-router-dom'; // For internal navigation
import '../styles/BlogPage.css'; // Import the CSS specific to this page

function BlogPage() {
  return (
    <main id="blog-main" className="blog-main">
      <section className="article-list">
        <article>
          <h2>
            {/* Link to the specific article page in React */}
            <Link to="/blog/mobile-first">Mobile-First is Here: Is Your Website Ready? (The Importance of Responsive Design)</Link>
          </h2>
          <p className="post-meta">Published on May 01, 2025 by DE Innovative Solutions</p>
          <p>
            Imagine trying to navigate a desktop website on your phone – frustrating, right? In the mobile-first
            era, responsive design ensures
            your website looks and functions flawlessly, no matter the screen size. Are you delivering a
            positive mobile experience?
          </p>
          <Link to="/blog/mobile-first" className="read-more">Read More</Link>
        </article>

        <article>
          <h2>
            {/* Link to the specific article page in React */}
            <Link to="/blog/password-security">Lock It Down: Why Strong Passwords Are Your First Line of Defense</Link>
          </h2>
          <p className="post-meta">Published on April 29, 2025 by DE Innovative Solutions</p>
          <p>Weak passwords are like leaving your front door wide open. Learn why strong, unique passwords are
            your first line of defense against online threats...</p>
          <Link to="/blog/password-security" className="read-more">Read More</Link>
        </article>
      </section>

      <aside className="sidebar">
        <h3>Categories</h3>
        <ul>
          {/* These links would ideally go to category-filtered blog lists or pages */}
          <li><Link to="/blog/category/security">Security</Link></li>
          <li><Link to="/blog/category/websites">Websites</Link></li>
          <li><Link to="/blog/category/technology">Technology</Link></li>
        </ul>
      </aside>
    </main>
  );
}

export default BlogPage;