const Comment =require("../../db/models/comments");


const getAllComments = (req, res) => {

  const _id = req.params.id;
  Comment.findById(_id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `No comment Found with this ${_id}`,
        });
      }
      res.status(200).json({
        success: true,
        message: `The comment with ${_id}`,
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

}


const createNewComment = (req, res) => {


}



const updateCommentById = (req, res) => {


}


const deleteCommentById = (req, res) => {


}




module.exports = {
    getAllComments,
    createNewComment,
    updateCommentById,
    deleteCommentById,
  };
  