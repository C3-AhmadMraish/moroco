import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../contexts/context";
import "./Comments.css";
import TimeAgo from "react-timeago";
import frenchStrings from "react-timeago/lib/language-strings/en";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Comment from "./Comment";
import { commentContext } from "../../App";

const Comments = () => {
  const formatter = buildFormatter(frenchStrings);

  const { token, userId } = useContext(AuthContext);
  const {comment,setComment } = useContext(commentContext);

  const [post, setpost] = useState();
  const [comments, setComments] = useState(); // For create new
  const [newComment, setnewComment] = useState();
  const { postId } = useParams();

  useEffect(() => {
    axios
    .get(`http://localhost:5000/posts/getpostbyid/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((result) => {
      setComments(result.data.post.comments);
      setpost(result.data.post);
    })
    .catch((err) => {
      setComments([]);
      console.log("err" + err);
    });
  }, [comment]);

  const createNewComment = async () => {
    try {
      const res = await axios.post(
        `http://localhost:5000/posts/${postId}/comment`,
        { comment: newComment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setComment( res.data.commentAdded);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="postComment">
      <div className="postdevid">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/avatar3.png" alt="" />
            <span className="postUsername">{post && post.user.firstName}</span>
            <span className="postDate">
              <TimeAgo date={post && post.date} formatter={formatter} />
            </span>
          </div>
          <div className="postTopRight"></div>
        </div>
        <div className="postCenter">{post && post.body}</div>
        <div className="postBottom">
          <div className="postBottomLeft">
            
          </div>
          <div className="postBottomRight">

          </div>
        </div>
        <hr style={{ fontSize: "20px", color: "gray", marginTop: "30px" }} />
        <div className="commentBottom">
          <div className="commentBottomLeft">
          <textarea
              placeholder="Enter your comment ..."
              onChange={(e) => {
                setnewComment(e.target.value);
              }}
            >
              
            </textarea>
          </div>
          <div className="commentBottomRight">
          <AddCircleOutlineIcon
              id="create_post"
              className="addNewCommentIcon"
              onClick={() => {
                createNewComment();
              }}
            />
          </div>
        </div>
        
        {comments &&
          comments.map((c) => {
            return <Comment c={c} postId={postId} />;
          })}
      </div>
    </div>
  );
};

export default Comments;
