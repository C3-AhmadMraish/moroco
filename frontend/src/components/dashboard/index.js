import React from 'react';
import Cover from '../cover/cover';
import Header from '../header';

const Dashboard = () => {
	return (
	<div className="App">
		
        <Header/>
		<Cover/>
		{/* <left/> */}
		{/* <Switch>
            <Route exact path="/timeline" component={Dashboard} />
            <Route exact path="/album" component={Dashboard} />
            <Route exact path="/follwers" component={Dashboard} />
            <Route exact path="/updateUserInfo" component={Dashboard} />
        </Switch>
		<right/>		 */}

		</div>
		);
};

export default Dashboard;
