import React, {useState, useContext , useEffect } from "react";
import './leftSideBar.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import PeopleIcon from '@material-ui/icons/People';
import EditIcon from '@material-ui/icons/Edit';
import { AuthContext } from "../../contexts/context";

const LeftSideBar = () => {
    const {token ,userId} = useContext(AuthContext);
    const [nameUser, setNameUser] = useState("");

    const getNameUser = async () => {

        
    //    console.log(token);
        try {
            const res = await axios.get(`http://localhost:5000/users/${userId}`,
            {
                headers: {
                  Authorization: `Bearer ${token}`,
                }}
            )
            console.log(res.data.posts.firstName);
            setNameUser(res.data.posts.firstName)

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
                <img src="/assets/avatar3.png" alt=""/>
                <span>{nameUser}</span>
            </div>
            <ul className="listIcon">
            <Link style={{textDecoration:"none"}} to="/"><li><RssFeedIcon/> timeline</li></Link>
                <Link style={{textDecoration:"none"}} to="/edit"><li><EditIcon/> Edit profile</li></Link>
                <li><PhotoAlbumIcon/> Album</li>
                <li><PeopleIcon/> Followers</li>
            </ul>
        </div>
    )
};
export default LeftSideBar;