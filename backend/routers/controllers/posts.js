const Post = require("../../db/models/posts");
const Comment = require("../../db/models/comments");

const getAllFriendsPosts = (req, res) => {
  console.log("Need to be done");
}

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
        message: "server error",
        err: err,
      });
    });
};

const createNewPost = (req, res) => {
  const { body, img, user } = req.body;
  const newPost = new Post({
    body,
    img,
    user,
  });

  newPost
    .save()
    .then((result) => res.status(201).json({ success: true, message: result }))
    .catch((err) =>
      res.status(500).json({ success: false, message: "Server Error" })
    );
};

const updatePostById = (req, res) => {
  const _id = req.params.id;

  Post.findByIdAndUpdate(_id, req.body, { new: true }) //req.body is what you send via frontend
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

const deletePostById = (req, res) => {
  const _id = req.params.id;
  Post.findByIdAndDelete(_id)
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

const getPostById = (req, res) => {
  const _id = req.params.id;
  Post.findById(_id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `No Post Found with this ${_id}`,
        });
      }
      res.status(200).json({
        success: true,
        message: `The post with ${_id}`,
        post: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
        err: err,
      });
    });
};

const likeDislikeToPost=(req,res)=>{
  const postid=req.params.id;
  const post=Post.findById({_id:id});
  if(!post.likes.includes(req.body.userId)){
    post.updateOne({$push:{likes:req.body.userId}});
    res.status(200).json("like sccesfully")
  }else{
    post.updateOne({$pull:{likes:req.body.userId}});
    res.status(200).json("Dislike sccesfully")
  }

}

module.exports = {
  createNewPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
  likeDislikeToPost
  getAllFriendsPosts

};


