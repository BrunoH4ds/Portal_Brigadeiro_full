const express = require('express');
const {
  createUserController,
  getUsersController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
  getLastUsersController,
} = require('../controllers/userController');
const { authenticateToken, authorizeAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

router.get('/', getUsersController);
router.get("/last", authenticateToken, authorizeAdmin, getLastUsersController);
router.post('/', createUserController);
router.get('/:id', getUserByIdController);
router.put('/:id', updateUserController);
router.delete('/:id', deleteUserController);

module.exports = router;
