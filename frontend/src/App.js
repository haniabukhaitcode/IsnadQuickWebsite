import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
function App() {
  const [backendStatus, setBackendStatus] = useState('Checking...');

  useEffect(() => {
    axios
      .get('https://isnadquickwebsite.onrender.com/api')
      .then(res => {
        const { message, status } = res.data;
        setBackendStatus(`${message} Status: (${status}) ✓`);
      })
      .catch(() => setBackendStatus('Offline (Standalone Mode)'));
  }, []);

  return (
    <Router>
      {/* Status Bar - Full width background */}
      <div className="main">
        <div className="container">
          <div className="status-bar">System Status: {backendStatus}</div>
        </div>
      </div>
      {/* Header - Full width background */}
      <div className="main">
        <div className="container">
          <div className="header-wrapper">
            <Header />
          </div>
        </div>
      </div>
      {/* Main content */}

      <main className="main-content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </main>
      <div className="main">
        <div className="container">
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
