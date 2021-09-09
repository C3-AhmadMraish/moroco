const Post = require("../../db/models/posts");


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

/*
const deletePostById = (req, res) => {
  const _id = req.params.id;
  Post
    .findByIdAndDelete(_id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The post with id: ${_id} was not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Deleted post with the id of:  ${_id}`,
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
,deletePostById
*/
module.exports={createNewPost,getAllPosts};
