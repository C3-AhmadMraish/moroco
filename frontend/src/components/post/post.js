import React, { useEffect, useState, useContext } from "react";
import "./post.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import axios from "axios";
import { postContext } from "../main";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CommentIcon from "@material-ui/icons/Comment";
const Post = () => {
  const [posts, setPosts] = useState([]);
  const { value } = useContext(postContext);

  useEffect(() => {
    axios
    .get("http://localhost:5000/posts")
    .then((res) =>{
     setPosts(res.data.posts)});
  }, [value]);

  return (
    <div className="colreverse">
    <>
      {posts &&
        posts.map((p, i) => (
          <div key={i} className="post">
            <div className="postdevid">
              <div className="postTop">
                <div className="postTopLeft">
                  <img
                    className="postProfileImg"
                    src="/assets/avatar3.png"
                    alt=""
                  />
                  <span className="postUsername">NAif</span>
                  <span className="postDate">3 hour ago</span>
                </div>
                <div className="postTopRight">
                  <span className="postDate">
                    <HighlightOffIcon className="deleteIcon" />
                  </span>
                </div>
              </div>
              <div className="postCenter">


                <span>
                  {p.body}
                {/* {p.body.split(" ").filter((a) =>!a.startsWith("http")) && (
                p.body.split(" ").filter((a) =>!a.startsWith("http").join(""))
                )} */}
                </span>
                  {/* {p.body.split(" ").filter((a) => a.startsWith("http")) && ( */}
                    <img
                      className="postImg"
                      src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"
                      // {p.body
                      //   .split(" ")
                      //   .filter((a) => a.startsWith("http"))}
                      alt=""
                    />
                  {/* )} */}
                
                {/* <span>{value&&value.map(v=>v.body)}</span> */}
              </div>
              <div className="postBottom">
                <div className="postBottomLeft">
                  <span className="postLikeIcon">
                    <ThumbUpAltIcon />
                  </span>
                  <span className="postLikeCounter">32 people like it</span>
                </div>
                <div className="postBottomRight">
                  <span className="postCommentIcom">
                    <CommentIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
    </div>
  );
};

export default Post;
