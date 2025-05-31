import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';

function App() {
  const [backendStatus, setBackendStatus] = useState('Checking...');

  useEffect(() => {
    axios.get('https://isnadquickwebsite.onrender.com/api')
      .then(res => {
        const { message, status } = res.data;
        setBackendStatus(`${message} Status: (${status}) ✓`);
      })
      .catch(() => setBackendStatus('Offline (Standalone Mode)'));
  }, []);

  return (
    <Router>
      {/* Status Bar */}
      <div className="bg-dark text-white text-center py-1 small">
        System Status: {backendStatus}
      </div>

      {/* Header */}
      <Header />

      {/* Main content container */}
      <div className="container my-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-auto">
        <div className="container text-center">
          <img src="/logo.svg" alt="ISNAD" style={{ height: '48px' }} className="mb-3" />
          <p>Standing between you and the disinformation machine</p>
          <div>
            <Link to="/about" className="mx-3 text-decoration-none text-white">
              Our Story
            </Link>
            <a href="#" className="mx-3 text-decoration-none text-white">
              Join Us
            </a>
            <a href="#" className="mx-3 text-decoration-none text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
