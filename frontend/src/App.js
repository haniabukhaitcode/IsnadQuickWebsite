import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api')
      .then(res => {
        setMessage(res.data.message);
        setLoading(false); //if data recieved no loading.
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); //if Error caught no loading.
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome Back to Coding!</h1>
      {loading ? (
        <p>Loading message from backend...</p>
      ) : (
        <p>Backend says: <strong>{message}</strong></p>
      )}
      <p>This is a simple React + Node.js application to help you get back on track.</p>
    </div>
  );
}

export default App;