import React, { useContext, useState, useEffect, createContext } from "react";
import {
  useHistory,
  Route,
  Switch,
  BrowserRouter,
  useLocation,
} from "react-router-dom";
import SignUp from "./components/auth/signUp/Signup";
import "./App.css";
import Login from "./components/auth/login/Login";
import Search from "./components/search/search";
import Post from "./components/post/post";
import Feed from "./components/feed/feed";
import Header from "./components/header";
import Cover from "./components/cover/cover";
import LeftSideBar from "./components/leftSideBar/leftSideBar";
import RightSideBar from "./components/rightSideBar/rightSideBar";
import "./components/main/main.css";
import "./App.css";
import { AuthContext } from "./contexts/context";
export const postContext = createContext({ value: [], setValue: () => {} });
const App = () => {
  let { setIsLoggedIn, isLoggedIn, saveToken } = useContext(AuthContext);
  const location = useLocation();
  const history = useHistory();
  const [value, setValue] = useState([]);
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
          </>
        )}
      </div>
    </>
  );
};

export default App;
