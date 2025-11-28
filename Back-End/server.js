require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const newsRoutes = require('./src/routes/newsRoutes');
const statsRoutes = require('./src/routes/statsRoutes');
const commentRoutes = require('./src/routes/commentRoutes');
const individualCommentRoutes = require('./src/routes/individualCommentRoutes');
const { authenticateToken, authorizeAdmin } = require('./src/middleware/authMiddleware');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

// Middleware
app.use(express.json());
app.use(require('cookie-parser')());

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Test DB connection
pool.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to PostgreSQL database');
  }
});

// Routes
app.use('/auth', authRoutes);
app.use('/users', authenticateToken, authorizeAdmin, userRoutes);
app.use('/news', newsRoutes);
app.use('/news/:newsId/comments', commentRoutes);
app.use('/comments', authenticateToken, individualCommentRoutes);
app.use('/stats', statsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = { pool };
