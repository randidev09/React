import React from 'react';
import {
	Redirect 
} from "react-router-dom";

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '',password: '',isLogin: window.localStorage.getItem('isLogin')};
    }

    componentDidMount(props) {
        window.localStorage.removeItem("isLogin");
        window.localStorage.removeItem("userData");
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("startDate");
        window.localStorage.removeItem("endDate");
        window.localStorage.removeItem("type");
        window.localStorage.removeItem("new_login");
        window.location.reload();
      }
    

    render() {
        if(!this.state.isLogin){
            return(
                <Redirect to="/login" />
            )
        }else{
            return('You will be redirecting, please wait ...')
        }
    }
}
  
export default Logout;
  