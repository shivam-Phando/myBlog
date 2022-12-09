const Post = require("../models/post");

const postController = {
  index: async (req, res) => {
    try {
      const post = await Post.find().populate('user');
      res.status(200).json({ success: true, data: post });
    } catch (error) {
      res.status(400).json({ success: false, error: error });
    }
  },

  create: async (req, res) => {
    try {
      const { title, description, user } = req.body;
      const newPost = await new Post({ title, description, user });
      await newPost.save();
      res.status(200).json({ success: true, data: newPost });
    } catch (error) {
      res.status(400).json({ success: false, error: error });
    }
  },
};

module.exports = postController;
