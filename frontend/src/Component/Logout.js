import React from 'react';
import {
	Redirect 
} from "react-router-dom";

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '',password: '',isLogin: window.localStorage.getItem('isLogin')};
    }

    componentWillMount(props) {
        window.localStorage.removeItem("isLogin")
      }
    

    render() {
        return(
            <Redirect to="/login" />
        )
    }
}
  
export default Logout;
  