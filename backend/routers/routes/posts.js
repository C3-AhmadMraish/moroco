const express=require("express");

const {createNewPost,getAllPosts}=require("../controllers/posts");
const postsRouter=express.Router();

postsRouter.get('/',getAllPosts)
postsRouter.post("/",createNewPost);
<<<<<<< HEAD
//postsRouter.delete("/deletepost/:id",deletePostById);   //deletePostById
=======
>>>>>>> parent of 0997afa (Merge pull request #13 from C3-AhmadMraish/deletePostById)


module.exports=postsRouter;
