import { ImageList } from "@material-ui/core";
import React,{useState} from "react";
import "./Album.css"
import Images from "./Images"

const Album = () => {
const [selectedImg, setSelectedImg]= useState(Images[0])

const Images =[]





    return (

        <div className="Album">
            <div className="container">
                <img src = {selectedImg} alt="Selected" ClassName="selected"/>
                <div classname="imgContainer">
                    {Images.map((img, index)=> (
                        <img
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
