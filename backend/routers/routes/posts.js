const express = require("express");


const {
  createNewPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
  likeDislikeToPost,
  getAllFriendsPosts
} = require("../controllers/posts");
const {
  getCommentById,
  createNewComment,
  updateCommentById,
  deleteCommentById,
} =require("../controllers/comments")

// middlewares
const authentication = require("../middlewares/authentication");

//router:
const postsRouter = express.Router();

//routes:
postsRouter.get("/", getAllPosts);
postsRouter.get("/getpostbyid/:id", getPostById);
postsRouter.post("/", createNewPost);
postsRouter.put("/", updatePostById);
postsRouter.get("/timeline/:id",getAllFriendsPosts);
postsRouter.put("/:id/like", likeDislikeToPost);
postsRouter.delete("/deletepost/:id", deletePostById);

//edit the routes
postsRouter.post("/:id/comment", createNewComment);
postsRouter.get("/comment/:id", getCommentById);
postsRouter.put("/:id/comment", updateCommentById);
postsRouter.delete("/:postId/comment", deleteCommentById);


module.exports = postsRouter;
