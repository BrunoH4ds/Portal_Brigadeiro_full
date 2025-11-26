const express = require('express');
const router = express.Router({ mergeParams: true });
const { createCommentController, getCommentsByNewsController } = require('../controllers/commentController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.use(authenticateToken);

router.get('/', getCommentsByNewsController);
router.post('/',authenticateToken, createCommentController);

module.exports = router;
