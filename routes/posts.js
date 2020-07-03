const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//GET BACK ALL THE POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
  // res.send('<a href="/">Home </a><a href="/posts">Posts </a><br>we are on posts');
});

//SUBMITS A POST
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//SPECIFIC POST
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETE POST
router.delete("/:postId", async (req, res) => {
  try {
    const postToRemove = await Post.remove({ _id: req.params.postId });
    res.json(postToRemove);
  } catch (err) {
    res.json({ message: err });
  }
});

//UPDATE A POST
router.patch("/:postId", async (req, res) => {
  try {
    const postToUpdate = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          title: req.body.title
        }
      }
    );
    res.json(postToUpdate);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
