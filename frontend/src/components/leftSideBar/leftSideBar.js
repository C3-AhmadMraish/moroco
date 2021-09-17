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

  const {token ,userId} = useContext(AuthContext);
  const [nameUser, setNameUser] = useState("");
const {profimg} = useContext(profimgContext)
  //  const [profimg, setProfimg] = useState(profimgContext); // use what is being sent from app context

  const getNameUser = async () => {
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
    getNameUser();
  }, []);
        

  return (
    <div className="leftSideBar">
        <div className="img_name">
          <img src={profimg} alt=""/>
          <span>{nameUser}</span>

        </div>
        <hr style={{ fontSize: "20px", color: "gray", marginTop: "30px" }} />
        <ul className="listIcon">
        <Link style={{textDecoration:"none"}} to="/Home"><li><RssFeedIcon/> timeline</li></Link>
            <Link style={{textDecoration:"none"}} to="/edit"><li><EditIcon/> Edit profile</li></Link>
            <Link style={{textDecoration:"none"}} to="/Album"><li><PhotoAlbumIcon/> Album</li></Link>
            <Link style={{textDecoration:"none"}} to="/Followers"><li><PeopleIcon/> Followers</li></Link>
        </ul>
    </div>
    )
};
export default LeftSideBar;
