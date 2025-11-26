const express = require('express');
const { authenticateToken, authorizeAdmin } = require('../middleware/authMiddleware');
const {
  createNewsController,
  getNewsController,
  getNewsByIdController,
  updateNewsController,
  deleteNewsController,
} = require('../controllers/newsController');

const router = express.Router();

// Protected routes (authenticated for read, admin for write)
router.get('/', getNewsController);
router.get('/:id', authenticateToken, getNewsByIdController);
router.post('/', authenticateToken, authorizeAdmin, createNewsController);
router.put('/:id', authenticateToken, authorizeAdmin, updateNewsController);
router.delete('/:id', authenticateToken, authorizeAdmin, deleteNewsController);

module.exports = router;
