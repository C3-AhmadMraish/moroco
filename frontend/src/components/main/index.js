import React, { useContext, useState, useEffect, createContext } from "react";
import { useHistory } from "react-router-dom";
import "./main.css";
import Post from "../post/post";
import Feed from "../feed/feed";
import Header from "../header";
import Cover from "../cover/cover";
import LeftSideBar from "../leftSideBar/leftSideBar";
import RightSideBar from "../rightSideBar/rightSideBar";
import "../main/main.css";
import "../../App.css";
import { AuthContext } from "../../contexts/context";
export const postContext = createContext({ value: [], setValue: () => {} });
const Main = () => {
  let { setIsLoggedIn, isLoggedIn, saveToken } = useContext(AuthContext);
  const history = useHistory();
  const [value, setValue] = useState([]);
  return (
    <>
      {isLoggedIn ? (
        <>
          <Header />
          <Cover />
          <div className="App">
            <LeftSideBar />
            <div className="main">
              <postContext.Provider value={{ value, setValue }}>
                <Feed />
                <Post />
              </postContext.Provider>
            </div>
            <RightSideBar />
          </div>
        </>
      ) : (
        history.push("/login")
      )}
    </>
  );
};
export default Main;