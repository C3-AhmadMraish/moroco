import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/context";
import "./Comments.css";

const Comments = ({ closeModal, postId }) => {
  const { token, userId } = useContext(AuthContext);
  const [post, setpost] = useState([]);
  const [NewBody, setNewBody] = useState("");
  const [comments, setComments] = useState([]);
  const [newComment, setnewComment] = useState();

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
        console.log("err" + err);
      });
  }, [comments]);

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

      console.log(res.data.comments)

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
    <div className="modalBackground">
      <div className="modalContainer">
        <span
          onClick={() => {
            closeModal(false);
          }}
          className="close"
        >
          &times;
        </span>

          <div>
            {
              <p>{post.body}</p>
            }
          </div>


        <div>
          <textarea
            onChange={(e) => {
              setnewComment(e.target.value);
            }}
          ></textarea>
          <br />
          <button onClick={createNewComment}>Comment</button>
        </div>

        {comments.length &&
          comments.map((c, i) => {
            const isAuthorized = c.commenter === userId;
            if (isAuthorized) {
              return (
                <div style={{ backgroundColor: "gray" }} key={i}>
                  <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => {
                      deleteComment(c._id);
                    }}
                  >
                    Delete
                  </button>

                  <input
                    onChange={(e) => {
                      setNewBody(e.target.value);
                    }}
                    placeholder={c.comment}
                  />

                  <button
                    style={{ backgroundColor: "blue" }}
                    onClick={() => {
                      updateComment(c._id);
                    }}
                  >
                    update
                  </button>
                </div>
              );
            }

            return (
              <div style={{ backgroundColor: "gray" }} key={i}>
                <input disabled value={c.comment} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Comments;
