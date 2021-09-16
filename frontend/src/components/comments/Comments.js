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
  const [NewBody, setNewBody] = useState(""); //For update
  const [comments, setComments] = useState(); // For create new
  const [newComment, setnewComment] = useState();
  const { postId } = useParams();
  
  
  const getAllComments = () => {
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
  };

  useEffect(() => {
    getAllComments();
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

      setComments([...comments, res.data.commentAdded]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateComment = async (id) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/posts/comment/${id}`,
        { body: NewBody },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(NewBody);
      console.log(res.data.comments);

      getAllComments();

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

      getAllComments()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="post">
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
            <textarea
              onChange={(e) => {
                setnewComment(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="postBottomRight">
            <AddCircleOutlineIcon
              className="addNewCommentIcon"
              onClick={() => {
                createNewComment();
              }}
            />
          </div>
        </div>
        <hr style={{ fontSize: "20px", color: "gray", marginTop: "30px" }} />
        {comments &&
          comments.map((c) => {
            const isAuthorized = c.commenter._id === userId;

            return isAuthorized ? (
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
                      <span className="postUsername">
                        {c.commenter.firstName}
                      </span>
                      <span className="postDate">
                        <TimeAgo date={c.date} formatter={formatter} />
                      </span>
                    </div>
                    <div className="postTopRight">
                      <button
                        onClick={() => {
                          deleteComment(c._id);
                        }}
                      >
                        Delete
                      </button>

                      <button
                        onClick={() => {
                          updateComment(c._id);
                        }}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                  <div className="postCenter">
                    <input
                      type="text"
                      onChange={(e) => {
                        setNewBody(e.target.value);
                      }}
                      style={{ background: "none", border: "none" }}
                      placeholder={c.comment}
                    />
                  </div>
                </div>
                <hr
                  style={{ fontSize: "20px", color: "gray", marginTop: "30px" }}
                />
              </div>
            ) : (
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
                      <span className="postUsername">
                        {c.commenter.firstName}
                      </span>
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
