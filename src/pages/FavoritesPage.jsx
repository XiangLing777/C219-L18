import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaTrash, FaBook, FaGraduationCap } from 'react-icons/fa';
import './FavoritesPage.css';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('courseFavorites') || '[]');
    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (courseId) => {
    const updatedFavorites = favorites.filter(course => course.id !== courseId);
    setFavorites(updatedFavorites);
    localStorage.setItem('courseFavorites', JSON.stringify(updatedFavorites));
  };

  const clearAllFavorites = () => {
    setFavorites([]);
    localStorage.setItem('courseFavorites', '[]');
  };

  return (
    <div className="favorites-page">
      <div className="favorites-container">
        <div className="favorites-header">
          <h1><FaHeart /> My Favorites</h1>
          <p>Courses you've marked as favorite</p>
        </div>
        
        {favorites.length === 0 ? (
          <div className="empty-favorites">
            <FaHeart className="empty-icon" />
            <h3>No favorite courses yet</h3>
            <p>Browse courses and click the heart icon to add them to favorites</p>
            <Link to="/diplomas" className="browse-btn">
              Browse Courses
            </Link>
          </div>
        ) : (
          <>
            <div className="favorites-actions">
              <button onClick={clearAllFavorites} className="clear-btn">
                <FaTrash /> Clear All
              </button>
              <span className="count-badge">{favorites.length} courses</span>
            </div>
            
            <div className="favorites-grid">
              {favorites.map(course => (
                <div key={course.id} className="favorite-card">
                  <div className="favorite-card-header">
                    <div className="course-code">{course.code}</div>
                    <button 
                      onClick={() => removeFavorite(course.id)}
                      className="remove-btn"
                      aria-label="Remove from favorites"
                    >
                      <FaTrash />
                    </button>
                  </div>
                  
                  <h3 className="course-name">{course.name}</h3>
                  <p className="course-description">{course.description}</p>
                  
                  <div className="course-details">
                    <div className="detail-item">
                      <FaBook />
                      <span>{course.credits} Credits</span>
                    </div>
                    <div className="detail-item">
                      <FaGraduationCap />
                      <span>{course.diplomaName}</span>
                    </div>
                  </div>
                  
                  <div className="favorite-card-actions">
                    <Link 
                      to={`/diplomas/${course.diplomaId}/${course.id}`} 
                      className="view-details-btn"
                    >
                      View Details
                    </Link>
                    <Link 
                      to={`/registration?course=${course.code}`}
                      className="register-btn"
                    >
                      Register Interest
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;