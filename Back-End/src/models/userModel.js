const pool = require('../config/db');

// Criar usuário
const createUser = async (userData) => {
  const {
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
    role = 'user'
  } = userData;

  const query = `
    INSERT INTO users (
      name, username, email, password_hash,
      user_type, ra, curso, turma, rg, materia, role
    ) VALUES (
      $1, $2, $3, $4,
      $5, $6, $7, $8, $9, $10, $11
    )
    RETURNING 
      _id, name, username, email, user_type, 
      ra, curso, turma, rg, materia, role, created_at
  `;

  const values = [
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
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
};

// Buscar usuário pelo email
const findUserByEmail = async (email) => {
  const result = await pool.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );
  return result.rows[0];
};

// Buscar usuário pelo username
const findUserByUsername = async (username) => {
  const result = await pool.query(
    'SELECT * FROM users WHERE username = $1',
    [username]
  );
  return result.rows[0];
};

// Buscar usuário por ID
const findUserById = async (id) => {
  const query = `
    SELECT 
      _id, name, username, email, user_type,
      ra, curso, turma, rg, materia,
      role, created_at
    FROM users
    WHERE _id = $1
  `;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

// Buscar todos usuários
const getAllUsers = async () => {
  const query = `
    SELECT 
      _id, name, username, email, user_type,
      ra, curso, turma, rg, materia, role, created_at
    FROM users
  `;
  const result = await pool.query(query);
  return result.rows;
};

// Atualizar usuário
const updateUser = async (id, updates) => {
  const fields = [];
  const values = [];
  let index = 1;

  for (const key in updates) {
    fields.push(`${key} = $${index}`);
    values.push(updates[key]);
    index++;
  }

  if (fields.length === 0) return null;

  const query = `
    UPDATE users 
    SET ${fields.join(', ')}
    WHERE _id = $${index}
    RETURNING 
      _id, name, username, email, user_type,
      ra, curso, turma, rg, materia, role, created_at
  `;

  values.push(id);

  const result = await pool.query(query, values);
  return result.rows[0];
};

// Deletar usuário
const deleteUser = async (id) => {
  const result = await pool.query(
    'DELETE FROM users WHERE _id = $1 RETURNING _id',
    [id]
  );
  return result.rows[0];
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserByUsername,
  findUserById,
  getAllUsers,
  updateUser,
  deleteUser,
};
