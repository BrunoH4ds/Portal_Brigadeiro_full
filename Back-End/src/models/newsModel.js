const pool = require('../config/db');

// Criar notícia
const createNews = async (title, content, author, image, category) => {
  const query = `
    INSERT INTO news (title, content, author, image, category)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING _id, title, date, content, author, image, category
  `;
  const values = [title, content, author, image, category];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Buscar todas as notícias
const getAllNews = async () => {
  const query = `
    SELECT 
      _id,
      title,
      date,
      content,
      author,
      image,
      category
    FROM news
    ORDER BY date DESC
  `;
  const result = await pool.query(query);
  return result.rows;
};

// Buscar notícia por ID
const getNewsById = async (id) => {
  const query = `
    SELECT 
      _id,
      title,
      date,
      content,
      author,
      image,
      category
    FROM news
    WHERE _id = $1
  `;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

// Atualizar notícia
const updateNews = async (id, updates) => {
  const fields = [];
  const values = [];
  let index = 1;

  if (updates.title) {
    fields.push(`title = $${index++}`);
    values.push(updates.title);
  }

  if (updates.content) {
    fields.push(`content = $${index++}`);
    values.push(updates.content);
  }

  if (updates.author) {
    fields.push(`author = $${index++}`);
    values.push(updates.author);
  }

  if (updates.image) {
    fields.push(`image = $${index++}`);
    values.push(updates.image);
  }

  if (updates.category) {
    fields.push(`category = $${index++}`);
    values.push(updates.category);
  }

  if (fields.length === 0) return null;

  const query = `
    UPDATE news
    SET ${fields.join(', ')}
    WHERE _id = $${index}
    RETURNING _id, title, date, content, author, image, category
  `;

  values.push(id);

  const result = await pool.query(query, values);

  return result.rows[0];
};

// Deletar notícia
const deleteNews = async (id) => {
  const query = `DELETE FROM news WHERE _id = $1 RETURNING _id`;
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
