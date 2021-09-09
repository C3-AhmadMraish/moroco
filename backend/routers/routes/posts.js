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
  getAllComments,
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
postsRouter.post("/comment", createNewComment);
//postsRouter.get("/:id/comment", getAllComments);//by post :id
postsRouter.put("/:id/comment", updateCommentById);
postsRouter.delete("/:id/comment", deleteCommentById);


module.exports = postsRouter;
