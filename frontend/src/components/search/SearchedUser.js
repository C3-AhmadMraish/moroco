import { React, useContext, useEffect, useState } from "react";
import { searchContext } from "../../App";

import axios from "axios";
import { AuthContext } from "../../contexts/context";

const SearchedUser = ({e}) => { 

    const { token,userId } = useContext(AuthContext);
    const [isFollower, setisFollower] = useState(false)
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

      const checkIsFollower = async () => {
// /
try {
          
   const result = await axios.get(`http://localhost:5000/users/${userId}/${e._id} `, {
     headers: {
       Authorization: `Bearer ${token}`,
     }})
       console.log(result,"check is follower")
       setisFollower(result.data.success)
   } catch (error) {
     console.log(error);
   }
   
 }

 useEffect(() => {
    checkIsFollower()
  }, []);

return (
    <div className="searchedUser" >
    <p>
      {e.firstName} {e.lastName}
    </p>
    
    <img className={isFollower?"y":"n"} 
    
    onClick={()=> {addFollower(e._id)}} height="250px" width="250px" src={e.avatar} alt=""/>
  </div>
)
}

export default SearchedUser;