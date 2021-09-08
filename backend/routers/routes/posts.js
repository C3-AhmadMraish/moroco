const express=require("express");
// const {getAllPosts} = require('../controllers/posts')
const postsRouter=express.Router();

postsRouter.get('/',getAllPosts)

module.exports=postsRouter;