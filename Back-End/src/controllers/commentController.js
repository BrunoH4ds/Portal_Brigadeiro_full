const {
  createComment,
  getCommentsByNewsId,
  getCommentById,
  updateComment,
  deleteComment,
} = require('../models/commentModel');

const createCommentController = async (req, res) => {
  try {
    const newsId = req.params.newsId;
    const { content } = req.body;
    const userId = req.user.id;

    const comment = await createComment(newsId, userId, content);
    res.status(201).json(comment);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getCommentsByNewsController = async (req, res) => {
  try {
    const comments = await getCommentsByNewsId(req.params.newsId);
    res.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateCommentController = async (req, res) => {
  try {
    const { content } = req.body;
    const commentId = req.params.id;
    const userId = req.user.id;
    const userRole = req.user.role;

    const comment = await getCommentById(commentId);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    if (comment.user_id !== userId && userRole !== 'admin') {
      return res.status(403).json({ message: 'Forbidden' });
    }

    const updatedComment = await updateComment(commentId, content);
    res.json(updatedComment);
  } catch (error) {
    console.error('Error updating comment:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteCommentController = async (req, res) => {
  try {
    const commentId = req.params.id;
    const userId = req.user.id;
    const userRole = req.user.role;

    const comment = await getCommentById(commentId);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    if (comment.user_id !== userId && userRole !== 'admin') {
      return res.status(403).json({ message: 'Forbidden' });
    }

    const deleted = await deleteComment(commentId);
    res.json({ message: 'Comment deleted', id: deleted.id });
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createCommentController,
  getCommentsByNewsController,
  updateCommentController,
  deleteCommentController,
};
