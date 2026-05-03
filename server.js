const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend files
app.use(express.static(__dirname));

// Home route (change file name if needed)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main_dash.html'));
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: `Server running on port ${PORT}` });
});

// Example upload route (optional)
app.post('/upload-image', (req, res) => {
  res.json({ message: "Upload route working" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});