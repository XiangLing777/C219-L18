import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaLaptopCode, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to Republic Polytechnic
            <span className="hero-subtitle">School of Infocomm</span>
          </h1>
          <p className="hero-description">
            Explore cutting-edge diplomas in Information Technology, Cybersecurity, 
            and Artificial Intelligence. Shape your future in the digital world.
          </p>
          <div className="hero-buttons">
            <Link to="/diplomas" className="hero-btn primary">
              Browse Diplomas <FaArrowRight />
            </Link>
            <Link to="/registration" className="hero-btn secondary">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose School of Infocomm?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaLaptopCode />
            </div>
            <h3>Industry-Relevant Curriculum</h3>
            <p>Stay ahead with courses designed in collaboration with industry leaders.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaShieldAlt />
            </div>
            <h3>Hands-On Learning</h3>
            <p>Practical projects and real-world scenarios for experiential learning.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaChartLine />
            </div>
            <h3>Career Opportunities</h3>
            <p>Strong industry connections and excellent graduate employment rates.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;