import React from 'react';
import { Link } from 'react-router-dom';
import './DiplomaCard.css';

const DiplomaCard = ({ diploma }) => {
  return (
    <div className="diploma-card">
      <div className="diploma-card-header">
        <h3 className="diploma-title">{diploma.name}</h3>
        <span className="diploma-duration">{diploma.duration}</span>
      </div>
      <p className="diploma-description">{diploma.description}</p>
      <div className="diploma-card-footer">
        <Link to={`/diplomas/${diploma.id}`} className="view-courses-btn">
          View Courses ({diploma.courses.length})
        </Link>
      </div>
    </div>
  );
};

export default DiplomaCard;