import React from 'react';
import { Route } from 'react-router-dom';

const App = () => {
	return(
		<>
		<Navigation> </Navigation>
		<div className="App">
		 <Switch>
		 <Route exact path="/Login" render={() => <Login/>}/>
		 <Route exact path="/Home" render={() => <Home/>}/>
		 <Route exact path="/Register"/>
		 <Route exact path="/Dashboard" component={()=> <Dashboard/>} />
		 
		 <Route path="*" component={() => "404 Page Not Found"} />
		 </Switch>



		</div>
		</>
	)
};

export default App;
