const fs = require("fs");

const readUsers = () => JSON.parse(fs.readFileSync("./data/users.json"));
const readPosts = () => JSON.parse(fs.readFileSync("./data/posts.json"));

const writeUsers = (data) =>
  fs.writeFileSync("./data/users.json", JSON.stringify(data));

const writePosts = (data) =>
  fs.writeFileSync("./data/posts.json", JSON.stringify(data));

const saveImage = (image, id) => {
  console.log(typeof image);
  const data = image.replace(/^data:image\/\w+;base64,/, "");
  const buf = Buffer.from(data, "base64");
  console.log(buf);
  fs.writeFile(`./data/images/${image}`, buf /* callback will go here */);
};

module.exports = { readUsers, readPosts, writeUsers, writePosts, saveImage };
