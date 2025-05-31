const express = require('express');
const cors = require('cors');
const app = express();

// Use Render's PORT or default to 10000 (important for Render)
const PORT = process.env.PORT || 10000;

// Configure CORS for your frontend URLs
app.use(cors({
  origin: [
    'https://isnad-quick-website.vercel.app', // Your live frontend
    'http://localhost:3000' // For local development
  ]
}));

// Middleware to parse JSON requests
app.use(express.json());

// API test endpoint
app.get('/api', (req, res) => {
  res.json({ 
    message: "Hello from backend!",
    status: "active",
    timestamp: new Date().toISOString(),
    port: PORT // Shows which port is being used
  });
});

// Start the server (critical change: '0.0.0.0' for Render)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode`);
  console.log(`Access URLs:`);
  console.log(`- Local:  http://localhost:${PORT}`);
  console.log(`- Render: https://your-service-name.onrender.com`);
  console.log(`- API Test Endpoint: /api`);
});