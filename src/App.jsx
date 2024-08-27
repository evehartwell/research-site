import React from 'react';
import Homepage from './home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
  )
}

export default App
