import React, { useState } from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';
import { diplomas } from '../data/diplomaData';
import { FaHeart, FaRegHeart, FaBook, FaClock } from 'react-icons/fa';

const CoursesPage = () => {
  const { diplomaId, courseId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);

  const diploma = diplomas.find(d => d.id === diplomaId);

  if (!diploma) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
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
    <div style={{ display: 'flex', height: '100%' }}>
      {/* Courses List Panel */}
      <div style={{ width: '400px', borderRight: '1px solid #e0e0e0', backgroundColor: '#fff', overflowY: 'auto' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #e0e0e0', backgroundColor: '#f8f9fa' }}>
          <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>{diploma.name}</h3>
          <p style={{ margin: '0 0 15px 0', color: '#666', fontSize: '14px' }}>Available Courses</p>
          <input
            type="text"
            placeholder="Search courses..."
            style={{ width: '100%', padding: '10px 15px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div style={{ padding: '10px' }}>
          {filteredCourses.map(course => (
            <Link
              key={course.id}
              to={`/diplomas/${diplomaId}/${course.id}`}
              style={{
                display: 'block',
                padding: '15px',
                marginBottom: '10px',
                backgroundColor: courseId === course.id ? '#f0fff4' : '#fff',
                border: '1px solid #e0e0e0',
                borderColor: courseId === course.id ? '#28a745' : '#e0e0e0',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#333',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <div style={{ backgroundColor: '#e9ecef', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: '600', color: '#495057' }}>
                  {course.code}
                </div>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    color: favorites.includes(course.id) ? '#ff6b6b' : '#ccc',
                    cursor: 'pointer',
                    fontSize: '16px',
                    padding: '0'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(course.id);
                  }}
                  aria-label="Toggle favorite"
                >
                  {favorites.includes(course.id) ? <FaHeart /> : <FaRegHeart />}
                </button>
              </div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#333' }}>{course.name}</h4>
              <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666', lineHeight: '1.4' }}>{course.description}</p>
              <div style={{ display: 'flex', gap: '15px', fontSize: '12px', color: '#888' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <FaBook /> {course.credits} Credits
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <FaClock /> {course.duration}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Course Details Panel */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default CoursesPage;