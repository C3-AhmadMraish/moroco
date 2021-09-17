import React,{useState,useContext, useEffect} from "react";
import { AuthContext } from "../../../contexts/context";
import axios from "axios";

const Followers = () => {
    const [follower,setFollower] = useState([])
    //useEffect in app which has a dependancy followers if followers change it will refire /reupdate ( cus maybe some will follow me
    //while i am using the website) then
    //useeffect in Followers component, gets followers from user res.data.posts.followers
    //put followers in the setFollowers usestate
    //in return
    // map over followers and return follower name and follower img
    
return (
    <>
{/*  map over follower Array (){
         //render res.data.follower
         / <br/>
         // re render

  //todo tomorrow

}*/}
    </>
)
}
export default Followers