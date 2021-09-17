import React, { useEffect, useState, useContext } from "react";
import "./post.css";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import axios from "axios";
import { postContext } from "../../App";
import { AuthContext } from "../../contexts/context";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import TimeAgo from "react-timeago";
import frenchStrings from "react-timeago/lib/language-strings/en";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import CommentIcon from "@material-ui/icons/Comment";
import Comments from "../comments/Comments";
import { Link, useHistory } from "react-router-dom";
import { profimgContext } from "../../App";

const Post = () => {
  const formatter = buildFormatter(frenchStrings);
  const [posts, setPosts] = useState([]);
  const { value, setValue } = useContext(postContext);
  const { token, userId } = useContext(AuthContext);
  const [nameUser, setNameUser] = useState("");
  const {profimg, setProfimg} = useContext(profimgContext);
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
  const Likeit = async (id) => {
    try {
      await axios
        .put(
          `http://localhost:5000/posts/${id}/like`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((resu) => console.log(resu));
      getAllPosts();
    } catch (error) {
      console.log(error);
    }
  };

  const getNameInPost = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data.posts.firstName);
      setNameUser(res.data.posts.firstName);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNameInPost();
  }, []);

  return (
    <>
      <div className="colreverse">
        {posts &&
          posts.map((p, i) => (
            <div key={i} className="post">
              <div className="postdevid">
                <div className="postTop">
                  <div className="postTopLeft">
                    <img
                      className="postProfileImg"
                      src={profimg}
                      alt={profimg}
                    />

                    <span className="postUsername">{nameUser}</span>
                    <span className="postDate">
                      <TimeAgo date={p.date} formatter={formatter} />
                    </span>
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
                      <ThumbUpAltIcon onClick={() => Likeit(p._id)} />
                    </span>
                    <span className="postLikeCounter">
                      {p.likes.length} people like it
                    </span>
                  </div>
                  <div className="postBottomRight">
                    <span className="postCommentIcom">
                      <Link to={`/${p._id}/comments`}>
                        <CommentIcon />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Post;
