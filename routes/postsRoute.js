const router = require("express").Router();
const { readPosts, readUsers } = require("../utils");

router.get("/", (_req, res) => {
  const sortedPosts = readPosts().sort((a, b) => b.timestamp - a.timestamp);

  const detailedPosts = sortedPosts.map((post) => {
    const user = readUsers().find((user) => user.id === post.userId);
    return { username: user.username, avatar: user.avatar, ...post };
  });

  res.status(200).json(detailedPosts);
});

module.exports = router;
