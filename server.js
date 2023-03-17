const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const postsRoute = require("./routes/postsRoute");
const usersRoute = require("./routes/usersRoute");
const userRoute = require("./routes/userRoute");

// const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use("/images", express.static("./data/images"));

app.use("/avatars", express.static("./data/avatar"));

app.use("/posts", postsRoute);

app.use("/users", usersRoute);

app.use("/user", userRoute);

app.listen(8000, () => console.log(`Server running on port 8000`));
