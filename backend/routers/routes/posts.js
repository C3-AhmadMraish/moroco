const express=require("express");

const {createNewPost,getAllPosts,updatePostById}=require("../controllers/posts");

const postsRouter=express.Router();

postsRouter.get('/',getAllPosts)
postsRouter.post("/",createNewPost);
postsRouter.put("/posts/:id",updatePostById)

module.exports=postsRouter;