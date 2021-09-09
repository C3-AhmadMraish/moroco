const Post = require("../../db/models/post");


const getAllPosts = (req, res) => {
  Post.find({})
    .then((result) => {
      if (!result.length) {   
        return res.status(404).json({
          success: false,
          message: "No posts yet",
        });
      }
      res.status(200).json({
        success: true,
        message: "all the posts",
        posts: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",err:err
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

const updatePostById = (req, res) => {
  const _id = req.params.id;

  Post
    .findByIdAndUpdate(_id, req.body, { new: true }) //req.body is what you send via frontend
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The Post with id ${_id} was not found`,
        });
      }
      res.status(202).json({
        success: true,
        message: `Post with id ${_id} has been updated`,
        article: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    });
};

module.exports={createNewPost,getAllPosts,updatePostById};
