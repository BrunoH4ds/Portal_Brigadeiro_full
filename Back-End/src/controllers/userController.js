const bcrypt = require('bcrypt');
const {
  createUser,
  getAllUsers,
  findUserById,
  updateUser,
  deleteUser,
  getLastUsers,
} = require('../models/userModel');

const saltRounds = 10;

const allowedDomains = ['gmail.com', 'hotmail.com', 'outlook.com'];

const validateEmail = (email) => {
  const domain = email.split('@')[1];
  return domain && allowedDomains.includes(domain);
};

// ===============================
// CREATE USER
// ===============================
const createUserController = async (req, res) => {
  const {
    name,
    username,
    email,
    password,
    user_type,
    ra,
    curso,
    turma,
    rg,
    materia,
    role
  } = req.body;

  if (!name || !username || !email || !password || !user_type) {
    return res.status(400).json({
      message:
        'Missing required fields: name, username, email, password, user_type'
    });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({
      message: 'Email domain not allowed. Allowed: gmail.com, hotmail.com, outlook.com'
    });
  }

  try {
    const password_hash = await bcrypt.hash(password, saltRounds);

    const newUser = await createUser({
      name,
      username,
      email,
      password_hash,
      user_type,
      ra,
      curso,
      turma,
      rg,
      materia,
      role
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Create user error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// ===============================
// GET LAST USER
// ===============================
const getLastUsersController = async (req, res) => {
  try {
    const users = await getLastUsers();
    res.json(users);
  } catch (error) {
    console.error('Get last users error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// ===============================
// GET ALL USERS
// ===============================
const getUsersController = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// ===============================
// GET USER BY ID
// ===============================
const getUserByIdController = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await findUserById(id);
    if (!user)
      return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (error) {
    console.error('Get user by ID error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// ===============================
// UPDATE USER
// ===============================
const updateUserController = async (req, res) => {
  const { id } = req.params;
  const updates = { ...req.body };

  try {
    if (updates.email && !validateEmail(updates.email)) {
      return res.status(400).json({
        message:
          'Email domain not allowed. Only gmail.com, hotmail.com, outlook.com are accepted.'
      });
    }

    if (updates.password) {
      updates.password_hash = await bcrypt.hash(updates.password, saltRounds);
      delete updates.password;
    }

    const updatedUser = await updateUser(id, updates);
    if (!updatedUser) {
      return res.status(404).json({
        message: 'User not found or no updates provided'
      });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error('Update user error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// ===============================
// DELETE USER
// ===============================
const deleteUserController = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await deleteUser(id);
    if (!deletedUser)
      return res.status(404).json({ message: 'User not found' });

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createUserController,
  getUsersController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
  getLastUsersController,
};
