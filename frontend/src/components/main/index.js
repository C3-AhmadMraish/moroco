import React, { useContext, useState, useEffect, createContext } from "react";
import { useHistory,Route,Switch,BrowserRouter,useLocation } from "react-router-dom";
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
import SignUp from "../auth/signUp/Signup";
import Search from "../search/search";
export const postContext = createContext({ value: [], setValue: () => {} });
const Main = () => {
  let { setIsLoggedIn, isLoggedIn, saveToken } = useContext(AuthContext);
  const location=useLocation();
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
              <Switch>


              <Route exact path="/search">
              <Search/>
              </Route>
              <Route exact path="/">
              <postContext.Provider value={{ value, setValue }}>
                   <Feed />
                   <Post />
                 </postContext.Provider>
              
              </Route>             
              </Switch>
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