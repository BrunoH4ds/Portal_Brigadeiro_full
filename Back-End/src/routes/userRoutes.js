const express = require('express');
const {
  createUserController,
  getUsersController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
} = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsersController);
router.post('/', createUserController);
router.get('/:id', getUserByIdController);
router.put('/:id', updateUserController);
router.delete('/:id', deleteUserController);

module.exports = router;
