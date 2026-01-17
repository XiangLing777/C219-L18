import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaClock, FaStar, FaHeart } from 'react-icons/fa';
import './CourseCard.css';

const CourseCard = ({ course, diplomaId, onToggleFavorite, isFavorite }) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    setFavorite(!favorite);
    onToggleFavorite(course);
  };

  return (
    <div className="course-card">
      <div className="course-card-header">
        <div className="course-code">{course.code}</div>
        <button 
          className={`favorite-btn ${favorite ? 'active' : ''}`}
          onClick={handleFavoriteClick}
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <FaHeart />
        </button>
      </div>
      
      <h4 className="course-name">{course.name}</h4>
      <p className="course-description">{course.description}</p>
      
      <div className="course-details">
        <div className="course-detail-item">
          <FaBook />
          <span>{course.credits} Credits</span>
        </div>
        <div className="course-detail-item">
          <FaClock />
          <span>{course.duration}</span>
        </div>
      </div>
      
      <div className="course-card-footer">
        <Link to={`/diplomas/${diplomaId}/${course.id}`} className="view-details-btn">
          View Details
        </Link>
        <span className="prerequisite">
          Prerequisites: {course.prerequisites || 'None'}
        </span>
      </div>
    </div>
  );
};

export default CourseCard;