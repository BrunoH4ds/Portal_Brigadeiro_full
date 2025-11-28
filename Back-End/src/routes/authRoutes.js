const express = require('express');
const { login, logout, me } = require('../controllers/authController');
const {authenticateToken} = require('../middleware/authMiddleware')

const router = express.Router();

router.get("/me", authenticateToken, me);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;
