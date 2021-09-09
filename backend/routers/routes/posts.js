const express = require("express");

const {
  createNewPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
} = require("../controllers/posts");

//router:
const postsRouter = express.Router();

//routes:
postsRouter.get("/", getAllPosts);
postsRouter.get("/getpostbyid/:id", getPostById);
postsRouter.post("/", createNewPost);
postsRouter.put("/", updatePostById);

postsRouter.delete("/deletepost/:id", deletePostById);

module.exports = postsRouter;
