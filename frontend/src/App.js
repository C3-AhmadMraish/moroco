import React, { useContext, useState, createContext, useEffect } from "react";
import { useHistory, Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/header/header";
import Search from "./components/search/search";
import SignUp from "./components/auth/signUp/Signup"
import Login from "./components/auth/login/Login";
import Post from "./components/post/post";
import Feed from "./components/feed/feed";
import LeftSideBar from "./components/leftSideBar/leftSideBar";
import RightSideBar from "./components/rightSideBar/rightSideBar";
import EditProfile from "./components/editProfile/editProfile";
import Main from "./components/main/main";
import "./components/main/main.css";
import "./App.css";
import { AuthContext } from "./contexts/context";
import Album from "./components/leftSideBar/Album/Album";
import Comments from "./components/comments/Comments";
import axios from "axios";

export const postContext = createContext({ value: [], setValue: () => {} });
export const searchContext = createContext({});
export const profimgContext = createContext({});   // main image
export const commentContext = createContext({});

const App = () => {
  let { setIsLoggedIn, isLoggedIn, saveToken ,token,userId} = useContext(AuthContext);
  const location = useLocation();
  const history = useHistory();
  const [value, setValue] = useState([]);
  const [sValue, setsValue] = useState([]);
  const [profimg, setProfimg] = useState(""); //main image
  const [comment, setComment] = useState([]);
  // const {token ,userId} =  useContext(AuthContext);

  
   //use
                      // this function will run on page load and gets img from avatar field in the db
                                   // if the user sets another image via album profile image change function it will update 
                                    // the db field via put function THEN--->
                                    // dependency will force the function to re-run and get the new updated img from db
  useEffect(async() => {
    try {
      console.log("mai hi",userId,"",token)
      // const userid = await token.userId
      const res = await axios.get(`http://localhost:5000/users/${userId}`, {headers: {Authorization: `Bearer ${token}`,},});
        console.log("mai res",res)
      // setNameUser(res.data.posts.firstName);
      setProfimg(res.data.posts.avatar) //check to know correct . . 
    } catch (error) {
      console.log(error);
    }               
  }, [userId]);


  return (
    <>
      <div>
        {!isLoggedIn ? (
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={SignUp} />
            {/* <Route path="*" component={() => "404 Page Not Found"} /> */}
          </Switch>
        ) : (
          <>
            <searchContext.Provider value={{ sValue, setsValue }}>
              <commentContext.Provider value={{ comment, setComment }}>
                <profimgContext.Provider value={{ profimg, setProfimg }}>      {/*  main image  */}
                  <Header />
                  <div className="App">
                    <LeftSideBar />
                    <div className="main">
                      <Switch>
                        <Route exact path="/search">
                          <Search />
                        </Route>
                        <Route exact path="/edit">
                          <EditProfile />
                        </Route>
                        <Route exact path="/:postId/comments">
                          <Comments />
                        </Route>
                        <Route exact path="/Album">
                          <Album />
                        </Route>
                        <Route exact path="/Home">
                          <postContext.Provider value={{ value, setValue }}>
                            <Feed />
                            <Post />
                          </postContext.Provider>
                        </Route>
                      </Switch>
                    </div>
                    <RightSideBar />
                  </div>
                </profimgContext.Provider>
              </commentContext.Provider>
            </searchContext.Provider>
          </>
        )}
      </div>
    </>
  );
};

export default App;
