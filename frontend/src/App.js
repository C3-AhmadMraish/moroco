import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from "./components/Navigation";
import SignUp from "./components/auth/Signup/Signup"
import Login from "./components/auth/login/Login";
import Logout from "./components/auth/Logout/Logout";




const App = () => {
	return(
		<>
		<Navigation> </Navigation>
		<div className="App">
		 <Switch>
		 <Route exact path="/Login" render={() => <Login/>}/>
		 <Route exact path="/SignUp"component={SignUp}/>
		 <Route exact path="/Dashboard" component={()=> <Dashboard/>} />

		 <Route path="*" component={() => "404 Page Not Found"} />
		 </Switch>



		</div>
		</>
	)
};

export default App;
