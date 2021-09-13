import React, { useContext, useState, createContext } from "react";
import { useHistory, Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/header/header";
import Cover from "./components/cover/cover";
import Search from "./components/search/search";
import SignUp from "./components/auth/Signup/Signup";
import Login from "./components/auth/login/Login";
import Post from "./components/post/post";
import Feed from "./components/feed/feed";
import LeftSideBar from "./components/leftSideBar/leftSideBar";
import RightSideBar from "./components/rightSideBar/rightSideBar";

import "./components/main/main.css";
import "./App.css";

import { AuthContext } from "./contexts/context";

export const postContext = createContext({ value: [], setValue: () => {} });
export const searchContext = createContext({ sValue: [], setsValue: () => {} });

const App = () => {
  let { setIsLoggedIn, isLoggedIn, saveToken } = useContext(AuthContext);
  const location = useLocation();
  const history = useHistory();
  const [value, setValue] = useState([]);
  const [svalue, setsValue] = useState([]);
  return (
    <>
      <div>
        {!isLoggedIn ? (
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={SignUp} />
            {/* <Route path="*" component={() => "404 Page Not Found"} /> */}
            {/* <Route exact path="/search" component={Search} /> */}
          </Switch>
        ) : (
          <>
            <searchContext.Provider value={{ svalue, setsValue }}>
              <Header />
              <Cover />
              <div className="App">
                <LeftSideBar />
                <div className="main">
                  <Switch>
                    <Route exact path="/search">
                      <Search />
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
            </searchContext.Provider>
          </>
        )}
      </div>
    </>
  );
};

export default App;
