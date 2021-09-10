import React from "react";
import { Route ,Switch} from "react-router-dom";
import Cover from "./components/cover/cover";
import Header from "./components/header/index";
// import Navigation from "./components/Navigation/Navigation";
// import SignUp from "./components/auth/Signup/Signup";
// import Login from "./components/auth/login/Login";
// import AuthProvider from "./contexts/context";

const App = () => {
  return (
	  <>
		  {/* <AuthProvider> */}
    <div className="App">
	      <Header/>
		  <Cover/>
        <Switch>
        {/* <Route exact path="/" render={() => <Login />} />
        <Route exact path="/SignUp" component={SignUp} /> */}
          {/* <Route exact path="/" component={Dashboard} /> */}
        {/* <Route path="*" component={() => "404 Page Not Found"} /> */}

      </Switch>
    </div>
        {/* </AuthProvider> */}
		</>
  );
};

export default App;
