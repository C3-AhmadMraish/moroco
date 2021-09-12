import React from 'react';
import './rightSideBar.css';

const RightSideBar = () => {
	return( 
	<div className="rightSideBar">
		 <h3>Trinding post <span><img className="trindingIcon" src="/assets/popularity.png"/></span></h3>
		 <div className="post">
      <div className="postdevid">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/avatar3.png" alt="" />
            <span className="postUsername">NAif</span>
            <span className="postDate">3 hour ago</span>
          </div>
        </div>
        <div className="postCenter">
          <span>My First Post :</span>
          <img className="postImg" src="/assets/jo.png" alt="" />
        </div>
      </div>
    </div>
    <div className="post">
      <div className="postdevid">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/avatar3.png" alt="" />
            <span className="postUsername">NAif</span>
            <span className="postDate">3 hour ago</span>
          </div>
        </div>
        <div className="postCenter">
          <span>My First Post :</span>
          <img className="postImg" src="/assets/jo.png" alt="" />
        </div>
      </div>
    </div>
    	<div className="post">
      <div className="postdevid">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/avatar3.png" alt="" />
            <span className="postUsername">NAif</span>
            <span className="postDate">3 hour ago</span>
          </div>
        </div>
        <div className="postCenter">
          <span>My First Post :</span>
          <img className="postImg" src="/assets/jo.png" alt="" />
        </div>
      </div>
    </div>
		 </div>
     );
};

export default RightSideBar;
