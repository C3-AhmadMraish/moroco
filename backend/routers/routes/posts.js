const express=require("express");

const {createNewPost,getAllPosts,getPostById}=require("../controllers/posts");

//router:
const postsRouter=express.Router();



//routes:
//  get -  http://localhost:5000/getpostbyid/2


postsRouter.get('/',getAllPosts)
postsRouter.get("/getpostbyid/:id",getPostById)
postsRouter.post("/",createNewPost);


module.exports=postsRouter;