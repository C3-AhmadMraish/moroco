import React from "react";
import { Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import SignUp from "./components/auth/Signup/Signup";
import Login from "./components/auth/login/Login";
import Logout from "./components/auth/Logout/Logout";
import AuthProvider from "./contexts/context";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Route exact path="/SignUp" component={SignUp} />
        <AuthProvider>
          <Route exact path="/home" component={Dashboard} />
        </AuthProvider>
        <Route path="*" component={() => "404 Page Not Found"} />
      </Switch>
    </div>
  );
};

export default App;
