import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import '../Style/Style.css';
import React from 'react';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {user: JSON.parse(window.localStorage.getItem('userData'))}
    }
    render() {
        let navButton;
        if(this.props.isLogin){
            navButton = <li><Link to="/logout">Logout</Link></li>
        }else{
            navButton = <li><Link to="/login">Login</Link></li>
        }

        return (
            <div className="navbar">
                <div className="w-100">
                    {this.state.user ? <div className="text-right">Welcome {this.state.user.name}</div> : ''}
                    <ul>
                        {navButton}
                    </ul>
                </div>
            </div>            
        );
    }
}
  
export default Navbar;
  