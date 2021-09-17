import React, { useEffect, useState } from "react";
import "./rightSideBar.css";
import axios from "axios";
import Trending from "./trending";

const RightSideBar = () => {
  const [trends, setTrends] = useState([])

    useEffect(() => {
      axios.get("http://localhost:5000/trends").then((res) => {
        setTrends(res.data.trends);
      }).catch((err)=>{
        console.log(err);
      });
    },[]);
    
  return (
    <div className="rightSideBar">
      <h4>
        Trending Posts{" "}
        <span>
          <img className="trindingIcon" src="/assets/popularity.png" />
        </span>
      </h4>
     
      {
        trends.length && trends.map((t,i)=>{
          return <Trending key={i} t={t}/>
        })
      }
    </div>
  );
};

export default RightSideBar;
