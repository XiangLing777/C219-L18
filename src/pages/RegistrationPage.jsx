import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { diplomas } from '../data/diplomaData';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialCourse = searchParams.get('course');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: initialCourse || '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Get all courses from all diplomas
  const allCourses = diplomas.flatMap(diploma => 
    diploma.courses.map(course => ({
      ...course,
      diplomaName: diploma.name
    }))
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.course) newErrors.course = 'Please select a course';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Save to localStorage
    const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    registrations.push({
      ...formData,
      id: Date.now(),
      date: new Date().toISOString()
    });
    localStorage.setItem('registrations', JSON.stringify(registrations));
    
    setIsSubmitted(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
      navigate('/diplomas');
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="registration-page">
      <div className="registration-container">
        <div className="registration-header">
          <h1>Course Registration</h1>
          <p>Register your interest in our courses</p>
        </div>
        
        {isSubmitted ? (
          <div className="success-message">
            <h3>✓ Registration Successful!</h3>
            <p>Thank you for registering your interest. We'll contact you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="registration-form">
            <div className="form-section">
              <h3>Personal Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            
            <div className="form-section">
              <h3>Course Selection</h3>
              <div className="form-group">
                <label htmlFor="course">Select Course *</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className={errors.course ? 'error' : ''}
                >
                  <option value="">Choose a course...</option>
                  {allCourses.map(course => (
                    <option key={course.id} value={course.code}>
                      {course.code} - {course.name} ({course.diplomaName})
                    </option>
                  ))}
                </select>
                {errors.course && <span className="error-text">{errors.course}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any questions or additional information..."
                  rows="4"
                />
              </div>
            </div>
            
            <div className="form-actions">
              <button type="submit" className="submit-btn">
                Submit Registration
              </button>
              <p className="form-note">
                * Required fields. You'll receive a confirmation email within 24 hours.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegistrationPage;