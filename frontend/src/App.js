import Navbar from './Component/Navbar';
import Login from './Component/Login';
import Logout from './Component/Logout';
import Sidebar from './Component/Sidebar';
import Dashboard from './Component/Dashboard';
import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

class App extends React.Component {
  	constructor(props) {
    	super(props);
    	this.state = {
      		isLogin: window.localStorage.getItem('isLogin')
    	}
		this.showSettings = this.showSettings.bind(this);
  	}

	showSettings (event) {
		event.preventDefault();
	}

  	render() {
	    return (
      		<div className="App" id="App">
				<Router>
					{this.state.isLogin ? <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} /> : ''}
					<main id="page-wrap">
						<Navbar isLogin={this.state.isLogin}></Navbar>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/logout">
							<Logout />
						</Route>
						<Route path="/dashboard">
							<Dashboard />
						</Route>
					</main>
				</Router>
	      	</div>
	    );
  	}
}

export default App;
