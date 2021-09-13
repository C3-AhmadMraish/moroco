import React from "react";
import "./header.css";
import { ReactComponent as Search } from "@material-design-icons/svg/filled/search.svg";
import { searchContext } from "../main";
const Header = () => {
  const {setsValue}  = useContext(searchContext)
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  // useState for userName
  // useState for userImg
  const searchSend = (e) => {
    //  e.preventDefault();
    let savedData = data;
    axios
      .post("http://localhost:5000/search", savedData)
      .then((result) => {
       setsValue(result)
        // send query via axios to backend
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
        <span className="logo">Moroco</span>
      </div>
      <div className="centerHeader">
    {/*-------------------------------search---------------------------------*/}
        <div className="seachArea">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="Search..."
            className="searchInput"
            onChange={(e) => {
              setData(e.target.value);
            }}
          ></input>
          <button type="button" onClick={searchSend}></button>
        </div>
    {/*-------------------------------search---------------------------------*/}
      </div>
      <div className="rightHeader">
        <img src="/assets/avatar2.jpg" alt="" />
      </div>
    </div>
  );
};
export default Header;