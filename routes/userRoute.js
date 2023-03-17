const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readUsers, writePosts, readPosts } = require("../utils");

router.get("/:userId/profile", (req, res) => {
  const { userId } = req.params;

  const user = readUsers().find((user) => user.id === userId);
  if (!user) res.status(404).send("404 Bad Request. User not found.");

  const posts = readPosts().filter((post) => post.userId === userId);
  if (!posts) res.status(404).send("404 Bad Request. Posts not found.");

  res.status(200).json({ ...user, posts: posts });
});

router.post("/:userId/post", (req, res) => {
  const { description, location } = req.body;
  if (!description || !location)
    res.status(400).send("400 Bad Request. Invalid input fields.");

  const { userId } = req.params;
  const user = readUsers().find((user) => user.id === userId);
  if (!user) res.status(404).send("404 Bad Request. User not found.");

  const postId = uuidv4();
  const newPost = {
    id: postId,
    userId,
    timestamp: Date.now(),
    image: "https://ca.slack-edge.com/T043CEKTYLB-U042Y8QDHTR-fe54155f302f-512",
    location,
    description,
    likes: 0,
    comments: 0,
  };

  const posts = readPosts();
  posts.push(newPost);

  writePosts(posts);

  res.status(201).json(posts);
});

module.exports = router;
