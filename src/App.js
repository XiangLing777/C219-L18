import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DiplomasPage from './pages/DiplomasPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetail from './components/CourseDetail';
import RegistrationPage from './pages/RegistrationPage';
import FavoritesPage from './pages/FavoritesPage';
import FAQPage from './pages/FAQPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/diplomas" element={<DiplomasPage />}>
              <Route index element={<DefaultDiplomaView />} />
              <Route path=":diplomaId" element={<CoursesPage />}>
                <Route index element={<DefaultCourseView />} />
                <Route path=":courseId" element={<CourseDetail />} />
              </Route>
            </Route>
            
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Default view components
const DefaultDiplomaView = () => (
  <div className="default-view">
    <h2>Welcome to Diplomas</h2>
    <p>Select a diploma from the left panel to view available courses</p>
  </div>
);

const DefaultCourseView = () => (
  <div className="default-view">
    <h2>Course Details</h2>
    <p>Select a course from the list to view detailed information</p>
  </div>
);

export default App;