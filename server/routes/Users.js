const express = require("express");
const router = express.Router();
const { Users } = require("../models");

router.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post);
});

module.exports = router;
