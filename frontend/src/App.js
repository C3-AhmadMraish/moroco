import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/main/index";
import SignUp from "./components/auth/signUp/Signup";
import "./App.css";
import Login from "./components/auth/login/Login";
const App = () => {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={SignUp} />
          <Route path="*" component={() => "404 Page Not Found"} />
        </Switch>
      </div>
    </>
  );
};

export default App;
