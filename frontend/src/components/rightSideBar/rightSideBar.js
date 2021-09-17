import React from 'react';
import './rightSideBar.css';

const RightSideBar = () => {

/* 
  example someone liked bashar post -----> bashar post like = 2
          someone liked Abdullah post ----->Abdullah post like = 1
          no one liked Naif post 
          no one liked ahmad post

  recursive function {                         
  let top = {key:"", value:0}                    |                      
  let second = {key:"", value:0}                 |            Bashars Post
                                                 |
  if (post.like > top.value){                    |   
    top.value = post.like                        |
    top = {key:"id of the comment", value:2}     |            Abdullah Post  
  }                                              |
  else if (post.like > second.value) {           |            
    second.value = post.like
    second = {key:"id of the comment", value:1}                       
  }

  }    

*/



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
