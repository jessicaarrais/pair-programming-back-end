const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readUsers, writePosts, saveImage, readPosts } = require("../utils");

router.post("/:userId/post", (req, res) => {
  const { image, description, location } = req.body;
  if (!image || !description || !location)
    res.status(400).send("400 Bad Request. Invalid input fields.");

  const { userId } = req.params;
  const user = readUsers().find((user) => user.id === userId);
  if (!user) res.status(404).send("404 Bad Request. User not found.");

  console.log("image", image);

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

  // saveImage(image, postId);
  writePosts(posts);

  res.status(201).json(posts);
});

module.exports = router;
