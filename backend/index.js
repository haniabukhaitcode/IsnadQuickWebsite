const express = require('express'); // imports the Express.js framework into your application.require('express') loads the Express module you installed with npm.
const cors = require('cors'); //This imports the CORS (Cross-Origin Resource Sharing) middleware. CORS allows your backend to accept requests from different domains (like your frontend running on a different port).
const app = express(); //This creates an instance of an Express application. app will be the main object you use to configure your server and define routes.
const PORT = 5000;
// Visual Analogy:
// Think of Express as a car:
// The express() constructor builds you a basic car (web server)
// cors() is like a special GPS module you bought separately
// app.use(cors()) is installing that GPS into your car


app.use(cors()); //This enables CORS for all routes in your application.Without this, browsers would block requests from frontends on different domains/ports.
app.use(express.json()); //This adds middleware that parses incoming requests with JSON payloads. It automatically converts request bodies from JSON format into JavaScript objects.


// While you could technically write:
// require('express')().use(cors()).use(express.json()).listen(5000, ...)

//app.get(path, (callback)
app.get('/api', (req, res) => {
  res.json({ message: "Hello from backend!" });
});


app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
