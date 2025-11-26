const pool = require('../config/db');

const createComment = async (newsId, userId, content) => {
  const query = `
    INSERT INTO comments (news_id, user_id, content)
    VALUES ($1, $2, $3)
    RETURNING id, news_id, user_id, content, created_at
  `;
  const values = [newsId, userId, content];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const getCommentsByNewsId = async (newsId) => {
  const query = 'SELECT id, news_id, user_id, content, created_at FROM comments WHERE news_id = $1 ORDER BY created_at ASC';
  const result = await pool.query(query, [newsId]);
  return result.rows;
};

const getCommentById = async (id) => {
  const query = 'SELECT * FROM comments WHERE id = $1';
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const updateComment = async (id, content) => {
  const query = 'UPDATE comments SET content = $1 WHERE id = $2 RETURNING id, news_id, user_id, content, created_at';
  const values = [content, id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const deleteComment = async (id) => {
  const query = 'DELETE FROM comments WHERE id = $1 RETURNING id';
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

module.exports = {
  createComment,
  getCommentsByNewsId,
  getCommentById,
  updateComment,
  deleteComment,
};
