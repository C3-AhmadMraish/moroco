import { React, useContext, useState } from "react";
import axios from "axios";
import { ReactComponent as Search } from "@material-design-icons/svg/filled/search.svg";
import { searchContext } from "../../App";
import { AuthContext } from "../../contexts/context";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { profimgContext } from "../../App";
import "./header.css";

const Header = () => {
  const history = useHistory();
  const { setsValue } = useContext(searchContext);
  const { token,logout } = useContext(AuthContext);
  const {profimg} = useContext(profimgContext)
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  // useState for userName
  // useState for userImg

//get axios mn db
// res..blablabla 
// setImg(res....avatar)




  const searchSend = (e) => {
    //  e.preventDefault();
    axios
      .post(
        `http://localhost:5000/users/search?name=${data}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
		  console.log("frontend",result.data.users)
        console.log(result.data.users.length);
        console.log("123test",result.data.users);
        setsValue(result.data.users);
        // send query via axios to backend
      })
      .then(() => {
        history.push("/search");
      })
      .catch((err) => {
        if (err.message == "Name doesn't exist") {
          // backend error
          setError("No user found with this name"); //frontend error display
        }
        if (err.message == `Server Error`) {
          // backend error
          setError(`Server Error`); //frontend error display
        }
        /*
            pass result into main.js via context? 
            render them in /search  how :D ??????????
            result.img
            result.usename               //i know i am not useing correct names in db just thinking
            */
      });
  };



  
  //------------------------------------------------------------------------------------------------
  return (
    <div className="headercontaner">
      <div className="leftHeader">
        {/* <span className="logo">Moroco</span> */}
        <Link style={{textDecoration:"none"}} to="/Home"><span className="logo">Moroco</span></Link>
      </div>
      <div className="centerHeader">
        {/*-------------------------------search---------------------------------*/}
        <div className="seachArea">
          <Search  onClick={searchSend} className="searchIcon" />
          <input
            type="text"
            placeholder="Search..."
            className="searchInput"
            onChange={(e) => {
              setData(e.target.value);
            }}
          ></input>
          {/* <button type="button" onClick={searchSend}></button> */}
        </div>
        {/*-------------------------------search---------------------------------*/}
      </div>
      <div className="rightHeader">
        <img src={profimg} alt="" />
        <div className="dropdown-content">
          <Link className="logout"  onClick={logout} >LogOut</Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
