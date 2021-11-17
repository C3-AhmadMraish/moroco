import React, { useState, useContext, useEffect } from "react";
import "./Followers.css"
import { AuthContext } from "../../../contexts/context";
import axios from "axios";

function Follower({f}) {
  const { token, userId } = useContext(AuthContext);
// console.log("f",f)
  // /:id/follow
  const addFollower = async (id) => {
   
    try {
      
     await axios.put(`http://localhost:5000/users/test/${id}/follow `, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      }})
        console.log("done")
    } catch (error) {
      console.log(error);
    }
    
  }
 


    return (
 
        

        <div className="searchedUser">

            <p>{f.firstName}</p>
            <img onClick={()=> {addFollower(f._id)}}height="250px" width="250px" alt="" src={f.avatar}/>

        </div>
        
        
    )
}
export default Follower
{/* <div className="searchContainer">
      {sValue &&
        sValue.map((e, i) => {
          return (

            <div className="searchedUser" key={i}>
              <p>
                {e.firstName} {e.lastName}
              </p>
              <img height="250px" width="250px" src={e.avatar} alt=""/>
            </div>
            

          );
        })}

    </div> */}