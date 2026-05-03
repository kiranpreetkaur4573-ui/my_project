// 1. Import required modules
const express = require('express');
const cors = require('cors');
const path = require('path');

// 2. Create app
const app = express();

// 3. Set port
const PORT = process.env.PORT || 5000;

// 4. Middleware
app.use(cors());
app.use(express.json());

// 5. Serve static files (frontend)
app.use(express.static(__dirname));

// 6. Routes

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main_dash.html')); // change if needed
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: `Server running on port ${PORT}` });
});

// Example API route
app.get('/api/test', (req, res) => {
  res.json({ message: "API working" });
});

// 7. Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main_dash.html'));
});