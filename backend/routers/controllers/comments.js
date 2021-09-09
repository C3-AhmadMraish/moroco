const Comment =require("../../db/models/comments");




const getCommentById = (req, res) => {
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

  const _id = req.params.id;

  Comment.findByIdAndUpdate(_id, req.body, { new: true })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The Comment with id ${_id} was not found`,
        });
      }
      res.status(202).json({
        success: true,
        message: `Comment with id ${_id} has been updated`,
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

}


const deleteCommentById = (req, res) => {


}




module.exports = {
    createNewComment,
    updateCommentById,
    deleteCommentById,
    getCommentById
  };
  
