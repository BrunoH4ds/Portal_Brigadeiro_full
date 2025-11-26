const express = require('express');
const router = express.Router();
const { updateCommentController, deleteCommentController } = require('../controllers/commentController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.put('/:id', updateCommentController);
router.delete('/:id', authenticateToken, deleteCommentController);

module.exports = router;
