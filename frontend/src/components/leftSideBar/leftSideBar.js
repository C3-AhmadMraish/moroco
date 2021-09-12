import React from 'react';
import './leftSideBar.css';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import PeopleIcon from '@material-ui/icons/People';
import EditIcon from '@material-ui/icons/Edit';
const LeftSideBar = () => {
    return (
        <div className="leftSideBar">
            <div className="img_name">
                <img src="/assets/avatar3.png" alt=""/>
                <span>Naif</span>
            </div>
            <ul className="listIcon">
                <li><RssFeedIcon/> timeline</li>
                <li><EditIcon/> Edit profile</li>
                <li><PhotoAlbumIcon/> Album</li>
                <li><PeopleIcon/> Followers</li>
            </ul>
        </div>
    )
};
export default LeftSideBar;