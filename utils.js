const fs = require("fs");

const readUsers = () => JSON.parse(fs.readFileSync("./data/users.json"));
const readPosts = () => JSON.parse(fs.readFileSync("./data/posts.json"));

const writeUsers = (data) =>
  fs.writeFileSync("./data/users.json", JSON.stringify(data));

const writePosts = (data) =>
  fs.writeFileSync("./data/posts.json", JSON.stringify(data));

module.exports = { readUsers, readPosts, writeUsers, writePosts };
