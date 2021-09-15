import React,{useState,useContext, useEffect} from "react";
import "./Album.css"
import Images from "./Images";
import { AuthContext } from "../../../contexts/context";
import { imgContext } from "../../../App";
import axios from "axios";

const Album = () => {
    const [selectedImg, setSelectedImg]= useState(Images[0])
    const [avatarImg, setavatarImg]= useState([])
    let { userId,token } = useContext(AuthContext);

useEffect(()=>{
    axios.get(`http://localhost:5000/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }})
    .then(result=>{
    })
    .catch(err=>console.log(err))
},[])


const ChangeProfPhoto = async ()=>{
   
    try {
      await axios.put(`http://localhost:5000/users/${userId}`,{
        album:selectedImg
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }}
      ).then(results=>{console.log("results",results)})
    } catch (error) {
      console.log(error);
    }
  }

    return (

        <div className="Album">
            <div className="container">
                <div className="perant">
                
                    <div className='Child'>
                <img onClick={()=> ChangeProfPhoto()} src = {selectedImg} width= "1400px" height="700px" alt="Selected" ClassName="selected"/>
                </div>
                </div>
                <br/>
                <div className="imgContainer">
                    {Images.map((img, index)=> (
                        <img className="imgu"
                        width= "250px"
                        height="250px"
                        style={{border:selectedImg === img ? "4px solid purple" : "" }}
                        key = {index}
                        src = {img}
                        alt = "test" 
                        onClick={()=> setSelectedImg(img)}  
                        />
                    ))}
                </div>
            </div>
        </div> 
    )
}

export default Album



//To do make img overlay on top of selected image to show upload,change cover, change prof buttons
// buttons will not render on image area
// dont use vertical images!

 //  const getAllImgs = async () => {         // album
 //  const updateUserCover = async () => {   // cover
 //  const updateUserAvatar = async () => {  // avatar
 



//add on click events to buttons bellow and propper mapping to db