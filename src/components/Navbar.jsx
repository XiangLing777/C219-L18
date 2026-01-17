import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaGraduationCap, FaClipboardList, FaHeart, FaQuestionCircle } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ favoritesCount }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <FaGraduationCap className="logo-icon" />
          <Link to="/" className="logo-link">
            <span className="logo-text">Republic Polytechnic</span>
            <span className="logo-subtext">School of Infocomm</span>
          </Link>
        </div>
        
        <div className="nav-menu">
          <Link to="/" className="nav-link">
            <FaHome /> Home
          </Link>
          <Link to="/diplomas" className="nav-link">
            <FaGraduationCap /> Diplomas
          </Link>
          <Link to="/registration" className="nav-link">
            <FaClipboardList /> Register
          </Link>
          <Link to="/favorites" className="nav-link">
            <FaHeart /> Favorites ({favoritesCount})
          </Link>
          <Link to="/faq" className="nav-link">
            <FaQuestionCircle /> FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;