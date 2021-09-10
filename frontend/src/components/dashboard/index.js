import React from 'react';

const Dashboard = () => {
	return (<div className="App">
		
        <Navigation> </Navigation>
		<left/>
		<Switch>
            <Route exact path="/timeline" component={Dashboard} />
            <Route exact path="/album" component={Dashboard} />
            <Route exact path="/follwers" component={Dashboard} />
            <Route exact path="/updateUserInfo" component={Dashboard} />
        </Switch>
		<right/>		
		</div>
		);
};

export default Dashboard;
