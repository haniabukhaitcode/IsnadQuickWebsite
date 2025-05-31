import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

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
      <div className="bg-gray-800 text-white text-center py-1 text-sm">
        System Status: {backendStatus}
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <img src="/logo.svg" alt="ISNAD" className="h-12 mx-auto mb-4"/>
          <p>Standing between you and the disinformation machine</p>
          <div className="mt-4">
            <a href="/about" className="inline-block mx-4 hover:text-blue-300">Our Story</a>
            <a href="#" className="inline-block mx-4 hover:text-blue-300">Join Us</a>
            <a href="#" className="inline-block mx-4 hover:text-blue-300">Contact</a>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;