const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const postsRoute = require("./routes/postsRoute");
const userRoute = require("./routes/userRoute");

const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use("/images", express.static("./data/images"));

app.use("/posts", postsRoute);

app.use("/user", userRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
