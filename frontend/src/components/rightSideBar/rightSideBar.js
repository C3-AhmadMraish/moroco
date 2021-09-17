import React from 'react';
import './rightSideBar.css';

const RightSideBar = () => {
	return( 
	<div className="rightSideBar">
		 <h4>Trinding post <span><img className="trindingIcon" src="/assets/popularity.png"/></span></h4>
		 <div className="trindPost">
      <div className="postdevid">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/avatar2.jpg" alt="" />
            <span className="postUsername">NAif</span>
            <span className="postDate">3 hour ago</span>
          </div>
        </div>
        <div className="postCenter">
          <span>My First Post :</span>
          <img className="postImg" src="https://images.unsplash.com/photo-1601120103207-78398c2e8e6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
        </div>
      </div>
    </div>

    <div className="trindPost">
      <div className="postdevid">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/avatar2.jpg" alt="" />
            <span className="postUsername">NAif</span>
            <span className="postDate">3 hour ago</span>
          </div>
        </div>
        <div className="postCenter">
          <span>My First Post :</span>
          <img className="postImg" src="https://images.unsplash.com/photo-1439535184894-489a1f018921?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
        </div>
      </div>
    </div>

    {/* <hr style={{ fontSize: "20px", color: "gray", marginTop: "30px" }} /> */}
    
    	<div className="trindPost">
      <div className="postdevid">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/avatar2.jpg" alt="" />
            <span className="postUsername">NAif</span>
            <span className="postDate">3 hour ago</span>
          </div>
        </div>
        <div className="postCenter">
          <span>My First Post :</span>
          <img className="postImg" src="https://images.unsplash.com/flagged/photo-1573162915877-b08d86c58ed5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
        </div>
      </div>
    </div>
		 </div>
     );
};

export default RightSideBar;
// import axios from 'axios';
// import React, {useState} from 'react';
// import './rightSideBar.css';


// const RightSideBar = () => {
// const [trending, setTrending] = useState([])
// /* 
//   example someone liked bashar post two times  ----->  bashar post like = 2
//           someone liked Abdullah post one time ----->  Abdullah post like = 1
//           no one liked Naif post 
//           no one liked ahmad post

//   recursive function {                         
//   let top = {key:"", value:0}                    |                      
//   let second = {key:"", value:0}                 |            Bashars Post
//                                                  |
//   if (post.like > top.value){                    |   
//     top.value = post.like                        |
//     top = {key:"id of the comment", value:2}     |            Abdullah Post  
//   }                                              |
//   else if (post.like > second.value) {           |            
//     second.value = post.like
//     second = {key:"id of the comment", value:1}                       
//   }

//   }    

// */


//   useEffect(() => {
//     axios.get('http://localhost:5000/posts').then((res)=>{
//       res.data.posts.sort
//     })
//   }, [])


// 	return( 
// 	<div className="rightSideBar">
// 		 <h3>Trinding post <span><img className="trindingIcon" src="/assets/popularity.png"/></span></h3>
// 		 <div className="post">
//       <div className="postdevid">
//         <div className="postTop">
//           <div className="postTopLeft">
//             <img className="postProfileImg" src="/assets/avatar3.png" alt="" />
//             <span className="postUsername">NAif</span>
//             <span className="postDate">3 hour ago</span>
//           </div>
//         </div>
//         <div className="postCenter">
//           <span>My First Post :</span>
//           <img className="postImg" src="/assets/jo.png" alt="" />
//         </div>
//       </div>
//     </div>
//     <div className="post">
//       <div className="postdevid">
//         <div className="postTop">
//           <div className="postTopLeft">
//             <img className="postProfileImg" src="/assets/avatar3.png" alt="" />
//             <span className="postUsername">NAif</span>
//             <span className="postDate">3 hour ago</span>
//           </div>
//         </div>
//         <div className="postCenter">
//           <span>My First Post :</span>
//           <img className="postImg" src="/assets/jo.png" alt="" />
//         </div>
//       </div>
//     </div>
//     	<div className="post">
//       <div className="postdevid">
//         <div className="postTop">
//           <div className="postTopLeft">
//             <img className="postProfileImg" src="/assets/avatar3.png" alt="" />
//             <span className="postUsername">NAif</span>
//             <span className="postDate">3 hour ago</span>
//           </div>
//         </div>
//         <div className="postCenter">
//           <span>My First Post :</span>
//           <img className="postImg" src="/assets/jo.png" alt="" />
//         </div>
//       </div>
//     </div>
// 		 </div>
//      );
// };

// export default RightSideBar;
