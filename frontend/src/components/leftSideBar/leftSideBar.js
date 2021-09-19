import React, { useState, useContext, useEffect } from "react";
import "./leftSideBar.css";
import axios from "axios";
import { Link } from "react-router-dom";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";
import PeopleIcon from "@material-ui/icons/People";
import EditIcon from "@material-ui/icons/Edit";
import { AuthContext } from "../../contexts/context";
import { profimgContext } from "../../App";

const LeftSideBar = () => {
  const { token, userId } = useContext(AuthContext);
  const [nameUser, setNameUser] = useState("");
  const { profimg } = useContext(profimgContext);
  //  const [profimg, setProfimg] = useState(profimgContext); // use what is being sent from app context

  const getNameUser2 = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNameUser(res.data.posts.firstName);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNameUser2();
  }, []);

  return (
    <div className="leftSideBar">
      <div className="img_name">
        <img src={profimg} alt="" />
        <span>{nameUser}</span>
      </div>
      <hr style={{ fontSize: "20px", color: "gray", marginTop: "30px" , width: "300px" }} />
      <ul className="listIcon">
        <Link className="linkLeftSideBar" to="/Home">
          <li>
            <RssFeedIcon /> Timeline
          </li>
        </Link>
        <Link className="linkLeftSideBar" to="/edit">
          <li>
            <EditIcon /> Edit profile
          </li>
        </Link>
        <Link className="linkLeftSideBar" to="/Album">
          <li>
            <PhotoAlbumIcon /> Album
          </li>
        </Link>
        <Link className="linkLeftSideBar" to="/Followers">
          <li>
            <PeopleIcon /> Followers
          </li>
        </Link>
      </ul>
    </div>
  );
};
export default LeftSideBar;
