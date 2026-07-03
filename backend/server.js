const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Tạo một API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Chào mừng từ Backend Node.js!' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Backend đang chạy tại http://localhost:${PORT}`);
});