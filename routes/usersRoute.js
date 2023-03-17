const router = require("express").Router();
const { readUsers } = require("../utils");

router.get("/", (_req, res) => {
  const users = readUsers();
  if (!users) res.status(404).send("404 Bad request. Users not found.");

  res.status(200).json(users);
});

module.exports = router;
