const express=require("express");

const {createNewPost,getAllPosts,deletePostById}=require("../controllers/posts");
const postsRouter=express.Router();

postsRouter.get('/',getAllPosts)
postsRouter.post("/",createNewPost);
postsRouter.delete("/deletepost/:id",deletePostById);


module.exports=postsRouter;