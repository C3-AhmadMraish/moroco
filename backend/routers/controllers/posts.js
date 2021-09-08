const Post = require("../../db/models/posts");


const getAllPosts = (req, res) => {
  Post.find({})
    .then((result) => {
      if (!result.data || !result.data.length) {
        return res.status(404).json({
          success: true,
          message: "No posts yet",
        });
      }
      res.status(200).json({
        success: true,
        message: "all the posts",
        posts: result.data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
      });
    });
};

const createNewPost=(req,res)=>{
    const {body,img,user}=req.body;
    const newPost=new Post({
        body,
        img,
        user
    });

    newPost
    .save()
    .then(result=>res.status(201).json({success:true,message:result}))
    .catch((err)=>res.status(500).json({success:false,message:"Server Error"}));
}


module.exports={createNewPost,getAllPosts};
