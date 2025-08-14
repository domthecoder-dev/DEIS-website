import '../styles/Hero.css';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-pattern"></div>

      {/* The content container now manages its own padding */}
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <h1 className="hero-title">
            Your Partner in <span>Tech</span> Solutions
          </h1>
          <p className="hero-subtitle">
            From security-based devices to custom-built websites, we've got you covered.
          </p>
          <div className="hero-buttons">
              <Link to="/shop/">
                  <button className="btn-primary">Shop Now</button>
              </Link>
            <button className="btn-secondary">
              Explore Services
            </button>
          </div>
        </div>
      </div>

      <div className="hero-wave"></div>
    </section>
  );
}