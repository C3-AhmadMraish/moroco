import React, { useEffect, useState, useContext } from "react";
import "./post.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import axios from "axios";
import { postContext } from "../../App";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CommentIcon from "@material-ui/icons/Comment";
const Post = () => {
  const [posts, setPosts] = useState([]);
  const { value } = useContext(postContext);

  const choose=(body)=>{

    const arraybody=body.split(" ");

    return<span>{ arraybody.map(x=>{
      
      if(x.startsWith("http")){
        // console.log(x.toString());
        return <img className="postImg" src={x} />
      }
      return x+" ";

    })}</span>

  }
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

{choose(p.body)}
                
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
