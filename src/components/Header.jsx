import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaGraduationCap, 
  FaClipboardList, 
  FaHeart, 
  FaQuestionCircle,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 从 localStorage 获取收藏数量
  const favorites = JSON.parse(localStorage.getItem('courseFavorites') || '[]');
  const favoritesCount = favorites.length;

  const navLinks = [
    { to: '/', icon: <FaHome />, text: 'Home' },
    { to: '/diplomas', icon: <FaGraduationCap />, text: 'Diplomas' },
    { to: '/registration', icon: <FaClipboardList />, text: 'Registration' },
    { 
      to: '/favorites', 
      icon: <FaHeart />, 
      text: 'Favorites',
      badge: favoritesCount > 0 ? favoritesCount : null
    },
    { to: '/faq', icon: <FaQuestionCircle />, text: 'FAQ' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <FaGraduationCap className="logo-icon" />
            <div className="logo-text">
              <span className="logo-main">Republic Polytechnic</span>
              <span className="logo-sub">School of Infocomm</span>
            </div>
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${
                location.pathname === link.to || 
                (link.to !== '/' && location.pathname.startsWith(link.to)) 
                  ? 'active' 
                  : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.icon}
              <span>{link.text}</span>
              {link.badge && (
                <span className="notification-badge">{link.badge}</span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;