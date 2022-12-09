const Comment = require("../models/comments");
const commentController = {
  create: async (req, res) => {
    try {
      const { comment, post } = req.body;
      const newComment = await new Comment({ comment, post });
      await newComment.save();
      res.status(200).json({ success: true, data: newComment });
    } catch (error) {
      res.status(404).json({ success: false, error: error });
    }
  },

  index: async (req, res) => {
    try {
      const comments = await Comment.find().populate('post');
      res.status(202).json({ success: true, data: comments });
    } catch (error) {
      res.status(404).json({ success: false, error: error });
    }
  }

};

module.exports = commentController;
