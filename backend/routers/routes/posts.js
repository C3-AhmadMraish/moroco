const express=require("express");

const {createNewPost,getAllPosts}=require("../controllers/posts");
const postsRouter=express.Router();

postsRouter.get('/',getAllPosts)
postsRouter.post("/",createNewPost);
//postsRouter.delete("/deletepost/:id",deletePostById);   //deletePostById


module.exports=postsRouter;
