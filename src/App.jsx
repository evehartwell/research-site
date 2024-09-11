import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Homepage from './home';
import AboutPage from './about';
import Resources from './resources';
import RelatedWorks from './papers';

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/papers" element={<RelatedWorks />} />
        </Routes>
      </Router>
  )
}

export default App
