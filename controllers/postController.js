import Post from "../models/Post.js";

// Get all posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json({
      message: "Posts retrieved successfully",
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch posts", error: error.message });
  }
};

// Get single post
export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post)
      return res.status(404).json({ message: "Post not found" });
    res.json({
      message: "Post retrieved successfully",
      data: post,
    });
  } catch (error) {
    res.status(400).json({ message: "Invalid ID", error: error.message });
  }
};

// Create new post
export const createPost = async (req, res) => {
  try {
    const { title, subTitle, Description } = req.body;
    const newPost = new Post({ title, subTitle, Description });
    await newPost.save();
    res.status(201).json({
      message: "Post created successfully",
      data: newPost,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create post", error: error.message });
  }
};

// Update post
export const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPost)
      return res.status(404).json({ message: "Post not found" });
    res.json({
      message: "Post updated successfully",
      data: updatedPost,
    });
  } catch (error) {
    res.status(400).json({ message: "Invalid ID", error: error.message });
  }
};

// Delete post
export const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost)
      return res.status(404).json({ message: "Post not found" });
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Invalid ID", error: error.message });
  }
};
