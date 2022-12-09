const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8000;

require("./db/db.js");
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const commentRoutes = require("./routes/comments")

app.use("/api", userRoutes);
app.use("/api", postRoutes);
app.use("/api", commentRoutes);

//initialize server
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
