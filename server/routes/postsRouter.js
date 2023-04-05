const express = require('express');
const { Post } = require('../db/models');

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    const posts = await Post.findAll();
    console.log({ posts: posts[0] });
    res.json(posts);
  })
  .post(async (req, res) => {
    console.log({ reqBody: req.body });
    const newPost = await Post.create(req.body);
    res.json(newPost);
  });

router.delete('/:id', async (req, res) => {
  try {
    await Post.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
