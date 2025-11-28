const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { findUserByEmail, findUserById } = require('../models/userModel');

const login = async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  try {
    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Criar token JWT com o _id correto
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        role: user.role,
        user_type: user.user_type,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Enviar cookie com o token
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
      maxAge: 60 * 60 * 1000
    });

    console.log(`Cookie set for user: ${user.username}`);

    res.json({
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        role: user.role,
        user_type: user.user_type,
        ra: user.ra,
        curso: user.curso,
        turma: user.turma,
        rg: user.rg,
        materia: user.materia,
        created_at: user.created_at,
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    console.log(email,password)
    res.status(500).json({ message: 'Internal server error' });
  }
};

const me = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const user = await findUserById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      authenticated: true,
      user: {
        _id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        role: user.role,
        user_type: user.user_type,
        ra: user.ra,
        curso: user.curso,
        turma: user.turma,
        rg: user.rg,
        materia: user.materia,
        created_at: user.created_at,
      },
    });
  } catch (error) {
    console.error("GET /auth/me error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const logout = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });
};

module.exports = {
  login,
  logout,
  me,
};
