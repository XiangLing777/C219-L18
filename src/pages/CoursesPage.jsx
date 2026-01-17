import React, { useState } from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';
import { diplomas } from '../data/diplomaData';
import { FaHeart, FaRegHeart, FaBook, FaClock } from 'react-icons/fa';
import './CoursesPage.css';

const CoursesPage = () => {
  const { diplomaId, courseId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);

  const diploma = diplomas.find(d => d.id === diplomaId);

  if (!diploma) {
    return (
      <div className="no-selection">
        <h3>Select a diploma to view courses</h3>
        <p>Choose a diploma from the left panel to see available courses</p>
      </div>
    );
  }

  const filteredCourses = diploma.courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFavorite = (courseId) => {
    setFavorites(prev =>
      prev.includes(courseId)
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  return (
    <div className="courses-container">
      {/* Courses List Panel */}
      <div className="courses-list-panel">
        <div className="panel-header">
          <h3>{diploma.name}</h3>
          <p className="panel-subtitle">Available Courses</p>
          <input
            type="text"
            placeholder="Search courses..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="courses-list">
          {filteredCourses.map(course => (
            <Link
              key={course.id}
              to={`/diplomas/${diplomaId}/${course.id}`}
              className={`course-item ${courseId === course.id ? 'active' : ''}`}
            >
              <div className="course-item-header">
                <div className="course-code">{course.code}</div>
                <button
                  className={`favorite-btn ${favorites.includes(course.id) ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(course.id);
                  }}
                  aria-label="Toggle favorite"
                >
                  {favorites.includes(course.id) ? <FaHeart /> : <FaRegHeart />}
                </button>
              </div>
              <h4 className="course-name">{course.name}</h4>
              <p className="course-description">{course.description}</p>
              <div className="course-meta">
                <span className="meta-item">
                  <FaBook /> {course.credits} Credits
                </span>
                <span className="meta-item">
                  <FaClock /> {course.duration}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Course Details Panel */}
      <div className="course-details-panel">
        <Outlet />
      </div>
    </div>
  );
};

export default CoursesPage;