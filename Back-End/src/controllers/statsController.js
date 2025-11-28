const pool = require("../config/db");

exports.getStats = async (req, res) => {
  try {
    const usersCount = await pool.query("SELECT COUNT(*) FROM users");
    const newsCount = await pool.query("SELECT COUNT(*) FROM news");
    res.json({
      users: parseInt(usersCount.rows[0].count),
      news: parseInt(newsCount.rows[0].count),
    });
  } catch (err) {
    console.error("Erro ao pegar estatísticas:", err);
    res.status(500).json({ message: "Erro ao carregar estatísticas" });
  }
};
