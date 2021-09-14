import React, { useEffect, useState, useContext } from "react";
import "./post.css";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import axios from "axios";
import { postContext } from "../../App";
import { AuthContext } from "../../contexts/context";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CommentIcon from "@material-ui/icons/Comment";
const Post = () => {
  const [posts, setPosts] = useState([]);
  const { value, setValue } = useContext(postContext);
  const { token } = useContext(AuthContext);
  const [openCModal, setOpenCModal] = useState(false);
  const [postComments, setpostComments] = useState();
  
  const choose = (body) => {
    const arraybody = body.split(" ");

    return (
      <span>
        {arraybody.map((x) => {
          if (x.startsWith("http")) {
            return <img className="postImg" src={x} />;
          }
          return x + " ";
        })}
      </span>
    );
  };
  const getAllPosts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/posts");
      console.log(res.data.posts);
      setPosts(res.data.posts);
    } catch (error) {
      setPosts([]);
      console.log(error);
    }
  };
  useEffect(() => {
    getAllPosts();
  }, [value]);

  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/posts/deletepost/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getAllPosts();
    } catch (error) {
      console.log(error);
    }
  };
  const Likeit=async (id)=>{
    try {
      await axios.put(`http://localhost:5000/posts/${id}/like`,{}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(resu=>console.log(resu))
      getAllPosts();
    } catch (error) {
      console.log(error);
    }
  }

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
                      <HighlightOffIcon
                        onClick={() => deletePost(p._id)}
                        className="deleteIcon"
                      />
                    </span>
                  </div>
                </div>
                <div className="postCenter">{choose(p.body)}</div>
                <div className="postBottom">
                  <div className="postBottomLeft">
                    <span className="postLikeIcon">
                      <ThumbUpAltIcon onClick={()=>Likeit(p._id)} />
                    </span>
                    <span className="postLikeCounter">{p.likes.length}  people like it</span>
                  </div>
                  <div className="postBottomRight">
                    <span className="postCommentIcom">
                      <CommentIcon
                        onClick={() => {
                          setOpenCModal(true);
                          setpostComments(p._id);
                        }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
         {openCModal && (
        <Comments closeModal={setOpenCModal} postId={postComments} />
         )}  
    </div>
   </>
  );
};

export default Post;
