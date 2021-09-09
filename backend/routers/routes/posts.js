const express = require("express");

const {
  createNewPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
  likeDislikeToPost
} = require("../controllers/posts");

//router:
const postsRouter = express.Router();

//routes:
postsRouter.get("/", getAllPosts);
postsRouter.get("/getpostbyid/:id", getPostById);
postsRouter.post("/", createNewPost);
postsRouter.put("/", updatePostById);
postsRouter.put("/:id/like", likeDislikeToPost);

postsRouter.delete("/deletepost/:id", deletePostById);

module.exports = postsRouter;
