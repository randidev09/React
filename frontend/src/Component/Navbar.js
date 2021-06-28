import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import '../Style/Style.css';
import React from 'react';

class Navbar extends React.Component {
    render() {
        let navButton;
        if(this.props.isLogin){
            navButton = <li><Link to="/logout">Logout</Link></li>
        }else{
            navButton = <li><Link to="/login">Login</Link></li>
        }

        return (
            <div className="navbar">
                <ul>
                    {navButton}
                </ul>
            </div>            
        );
    }
}
  
export default Navbar;
  