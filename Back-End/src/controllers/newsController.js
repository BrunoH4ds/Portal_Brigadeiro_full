const {
  createNews,
  getAllNews,
  getNewsById,
  updateNews,
  deleteNews,
} = require('../models/newsModel');

const createNewsController = async (req, res) => {
  try {
    const { title, content } = req.body;
    const createdBy = req.user.id;

    const news = await createNews(title, content, createdBy);
    res.status(201).json(news);
  } catch (error) {
    console.error('Error creating news:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getNewsController = async (req, res) => {
  try {
    const news = await getAllNews();
    res.json(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getNewsByIdController = async (req, res) => {
  try {
    const news = await getNewsById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.json(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateNewsController = async (req, res) => {
  try {
    const updates = {};
    if (req.body.title) updates.title = req.body.title;
    if (req.body.content) updates.content = req.body.content;

    const updatedNews = await updateNews(req.params.id, updates);
    if (!updatedNews) {
      return res.status(404).json({ message: 'News not found or no updates provided' });
    }
    res.json(updatedNews);
  } catch (error) {
    console.error('Error updating news:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteNewsController = async (req, res) => {
  try {
    const deleted = await deleteNews(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'News not found' });
    }
    res.json({ message: 'News deleted', id: deleted.id });
  } catch (error) {
    console.error('Error deleting news:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createNewsController,
  getNewsController,
  getNewsByIdController,
  updateNewsController,
  deleteNewsController,
};
