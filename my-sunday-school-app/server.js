const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Serve the frontend folder called "public"
app.use(express.static(path.join(__dirname, 'public')));

// Test backend route
app.get('/api/hello', (req, res) => {
  res.json({ message: "Your backend is working, Aman!" });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});