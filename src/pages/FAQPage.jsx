import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './FAQPage.css';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'How do I apply for a course?',
      answer: 'You can apply through our online portal by filling out the registration form for your desired course. After submission, our admissions team will contact you within 24 hours.'
    },
    {
      question: 'What are the entry requirements?',
      answer: 'Entry requirements vary by diploma. Generally, you need at least 5 GCE O-Level passes including English and Mathematics. Please check individual diploma pages for specific requirements.'
    },
    {
      question: 'Can I apply for multiple courses?',
      answer: 'Yes, you can apply for multiple courses, but each application must be submitted separately. We recommend focusing on your primary area of interest.'
    },
    {
      question: 'What is the course duration?',
      answer: 'Most diplomas are 3 years in duration, consisting of 6 semesters. Each course module typically lasts 15 weeks.'
    },
    {
      question: 'Are there any scholarships available?',
      answer: 'Yes, Republic Polytechnic offers various scholarships and financial aid options. Please visit our financial aid office or check the website for more information.'
    },
    {
      question: 'Can international students apply?',
      answer: 'Yes, we welcome international students. You will need to meet the entry requirements and have a valid student pass. Contact our international student office for assistance.'
    },
    {
      question: 'What are the class schedules like?',
      answer: 'Classes are typically scheduled between 8:30 AM to 5:30 PM from Monday to Friday. Some courses may have evening sessions or online components.'
    },
    {
      question: 'Is there career support after graduation?',
      answer: 'Yes, our Career Services Office provides job placement assistance, career counseling, resume workshops, and networking opportunities with industry partners.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="faq-container">
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our courses and admissions</p>
        </div>
        
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <div 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <h3>{item.question}</h3>
                <span className="toggle-icon">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="contact-section">
          <h3>Still have questions?</h3>
          <p>Contact our admissions office:</p>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Email:</strong> admissions@rp.edu.sg
            </div>
            <div className="contact-item">
              <strong>Phone:</strong> +65 6510 3000
            </div>
            <div className="contact-item">
              <strong>Operating Hours:</strong> Mon-Fri, 8:30AM-5:30PM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;