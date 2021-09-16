import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./Comments.css";
import TimeAgo from "react-timeago";
import frenchStrings from "react-timeago/lib/language-strings/en";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import { AuthContext } from "../../contexts/context";
import { commentContext } from "../../App";

const Comment = ({ c }) => {
  const formatter = buildFormatter(frenchStrings);
  const { token, userId } = useContext(AuthContext);
  const [NewBody, setNewBody] = useState(""); //For update
  const {setcomment } = useContext(commentContext);
  const isAuthorized = c.commenter._id === userId;

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

      setcomment(res.date.comment)

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

      
    } catch (error) {
      console.log(error);
    }
  };

  if (isAuthorized) {
    return (
      <div
        key={c._id}
        className="commentSection"
        style={{ marginLeft: "70px", marginTop: "30px" }}
      >
        <div className="postdevid">
          <div className="postTop">
            <div className="postTopLeft">
              <img className="postProfileImg" src={c.commenter.avatar} alt="" />
              <span className="postUsername">{c.commenter.firstName}</span>
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
        <hr style={{ fontSize: "20px", color: "gray", marginTop: "30px" }} />
      </div>
    );
  }

  return (
    <div
      key={c._id}
      className="commentSection"
      style={{ marginLeft: "70px", marginTop: "30px" }}
    >
      <div className="postdevid">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={c.commenter.avatar} alt="" />
            <span className="postUsername">{c.commenter.firstName}</span>
            <span className="postDate">
              <TimeAgo date={c.date} formatter={formatter} />
            </span>
          </div>
          <div className="postTopRight"></div>
        </div>
        <div className="postCenter">{c.comment}</div>
      </div>
      <hr style={{ fontSize: "20px", color: "gray", marginTop: "30px" }} />
    </div>
  );
};

export default Comment;
