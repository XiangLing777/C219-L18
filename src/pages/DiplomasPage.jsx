import React, { useState } from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';
import { diplomas } from '../data/diplomaData';
import './DiplomasPage.css';

const DiplomasPage = () => {
  const { diplomaId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDiplomas = diplomas.filter(diploma =>
    diploma.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    diploma.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="diplomas-container">
      {/* Left sidebar - Diplomas list */}
      <div className="diplomas-sidebar">
        <div className="sidebar-header">
          <h2>Diplomas</h2>
          <input
            type="text"
            placeholder="Search diplomas..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="diplomas-list">
          {filteredDiplomas.map(diploma => (
            <Link
              key={diploma.id}
              to={`/diplomas/${diploma.id}`}
              className={`diploma-item ${diplomaId === diploma.id ? 'active' : ''}`}
            >
              <div className="diploma-item-content">
                <h3>{diploma.name}</h3>
                <p className="diploma-description">{diploma.description}</p>
                <div className="diploma-meta">
                  <span className="course-count">{diploma.courses.length} courses</span>
                  <span className="duration">{diploma.duration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Right content area - Courses and Course Details */}
      <div className="diplomas-content">
        <Outlet />
      </div>
    </div>
  );
};

export default DiplomasPage;