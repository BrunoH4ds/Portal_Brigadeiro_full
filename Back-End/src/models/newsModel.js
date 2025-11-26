const pool = require('../config/db');

const createNews = async (title, content, createdBy) => {
  const query = `
    INSERT INTO news (title, content, created_by)
    VALUES ($1, $2, $3)
    RETURNING id, title, content, created_by, created_at
  `;
  const values = [title, content, createdBy];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const getAllNews = async () => {
  const query = 'SELECT id, title, content, created_by, created_at FROM news ORDER BY created_at DESC';
  const result = await pool.query(query);
  return result.rows;
};

const getNewsById = async (id) => {
  const query = 'SELECT * FROM news WHERE id = $1';
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const updateNews = async (id, updates) => {
  const fields = [];
  const values = [];
  let paramIndex = 1;

  if (updates.title) {
    fields.push(`title = $${paramIndex++}`);
    values.push(updates.title);
  }
  if (updates.content) {
    fields.push(`content = $${paramIndex++}`);
    values.push(updates.content);
  }

  if (fields.length === 0) return null;

  const query = `UPDATE news SET ${fields.join(', ')} WHERE id = $${paramIndex} RETURNING id, title, content, created_by, created_at`;
  values.push(id);
  const result = await pool.query(query, values);
  return result.rows[0];
};

const deleteNews = async (id) => {
  const query = 'DELETE FROM news WHERE id = $1 RETURNING id';
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

module.exports = {
  createNews,
  getAllNews,
  getNewsById,
  updateNews,
  deleteNews,
};
