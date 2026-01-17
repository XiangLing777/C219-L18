import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { diplomas } from '../data/diplomaData';
import { FaBook, FaClock, FaUserGraduate, FaArrowLeft } from 'react-icons/fa';
import './CourseDetail.css';

const CourseDetail = () => {
  const { diplomaId, courseId } = useParams();

  const diploma = diplomas.find(d => d.id === diplomaId);
  const course = diploma?.courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="no-course-selected">
        <h3>Select a Course</h3>
        <p>Choose a course from the list to see details</p>
        <Link to="/diplomas" className="back-link">
          <FaArrowLeft /> Back to Diplomas
        </Link>
      </div>
    );
  }

  return (
    <div className="course-detail">
      <div className="course-detail-header">
        <div className="course-header-main">
          <div className="course-code-badge">{course.code}</div>
          <h2>{course.name}</h2>
          <p className="course-subtitle">{course.description}</p>
        </div>
        
        <Link to={`/registration?course=${course.code}`} className="register-btn">
          Register Interest
        </Link>
      </div>

      <div className="course-detail-content">
        <div className="detail-section">
          <h3>Course Information</h3>
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon">
                <FaBook />
              </div>
              <div className="info-content">
                <label>Credits</label>
                <p>{course.credits} Credits</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FaClock />
              </div>
              <div className="info-content">
                <label>Duration</label>
                <p>{course.duration}</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FaUserGraduate />
              </div>
              <div className="info-content">
                <label>Faculty</label>
                <p>{course.faculty}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h3>About This Course</h3>
          <div className="course-description-full">
            <p>This course provides comprehensive knowledge and practical skills in the subject area. Students will learn through a combination of lectures, hands-on labs, and real-world projects.</p>
            <p>Upon successful completion of this course, students will be able to demonstrate proficiency in key concepts and apply them in practical scenarios.</p>
          </div>
        </div>

        <div className="detail-section">
          <h3>Learning Outcomes</h3>
          <ul className="outcomes-list">
            <li>Understand fundamental concepts and principles</li>
            <li>Apply knowledge to solve practical problems</li>
            <li>Develop critical thinking and analytical skills</li>
            <li>Work effectively in team-based projects</li>
            <li>Communicate technical concepts clearly</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;