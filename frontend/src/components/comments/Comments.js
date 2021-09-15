import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../contexts/context";
import "./Comments.css";
import TimeAgo from "react-timeago";
import frenchStrings from "react-timeago/lib/language-strings/en";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
const Comments = () => {
  const formatter = buildFormatter(frenchStrings);
  const { token, userId } = useContext(AuthContext);
  const [post, setpost] = useState();
  const [NewBody, setNewBody] = useState("");
  const [comments, setComments] = useState([]);
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
        // console.log();
      })
      .catch((err) => {
        console.log("err" + err);
      });
  }, []);

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

      setComments([...post.comments, res.data.commentAdded]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateComment = async (id) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/posts/${id}/comment`,
        { body: NewBody },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data.comments);

      setComments([...post.comments, ...res.data.comments]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/posts/${postId}/comment/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setComments([...post.comments]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="post">
      {console.log(post)}
      <div className="postdevid">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/avatar3.png" alt="" />
            <span className="postUsername">{post && post.user.firstName}</span>
            <span className="postDate"><TimeAgo date={post&&post.date} formatter={formatter} /></span>
          </div>
          <div className="postTopRight"></div>
        </div>
        <div className="postCenter">{post && post.body}</div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <textarea></textarea>
          </div>
          <div className="postBottomRight">
            <AddCircleOutlineIcon />
          </div>
        </div>
        <hr style={{ fontSize: "20px", color: "gray", marginTop: "30px" }} />
        {comments.length &&
          comments.map((c) => {
            return (
              <div
                key={c._id}
                className="commentSection"
                style={{ marginLeft: "70px", marginTop: "30px" }}
              >
                <div className="postdevid">
                  <div className="postTop">
                    <div className="postTopLeft">
                      <img
                        className="postProfileImg"
                        src={c.commenter.avatar}
                        alt=""
                      />
                      {console.log(c.comment)}
                      <span className="postUsername">
                        {c.commenter.firstName}
                      </span>
                      {console.log(new Date().getDate())}
                      <span className="postDate">
                        <TimeAgo date={c.date} formatter={formatter} />
                      </span>
                    </div>
                    <div className="postTopRight"></div>
                  </div>
                  <div className="postCenter">{c.comment}</div>
                </div>

                <hr
                  style={{ fontSize: "20px", color: "gray", marginTop: "30px" }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Comments;
