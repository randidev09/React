import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import React from 'react';
import axios from 'axios';
import {
	Redirect 
} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '',password: '',isLogin: window.localStorage.getItem('isLogin')};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    
    async handleSubmit(event) {
        event.preventDefault();
        try {
            const res = await axios.post(`http://localhost/api/login`,{
                email: this.state.email,
                password: this.state.password,
            })
            let response_code = res.data.code
            let message = res.data.message
            let token = res.data.token
            let user = res.data.data
            if(response_code === 200){
                window.localStorage.setItem('isLogin', true);
                window.localStorage.setItem('token', token);
                window.localStorage.setItem('userData', JSON.stringify(user));
                window.localStorage.setItem('startDate', new Date());
                window.localStorage.setItem('endDate', new Date(new Date(new Date()).setDate(new Date().getDate()+ 30)));
                window.localStorage.setItem('type', "all");
                window.localStorage.setItem('new_login', true);
                window.location.reload();
            }else{
                toast.error(message)
            }
        }
        catch(err) {
            toast.error(err.response.data.message)
        }
    }
    
    render() {
        if(!this.state.isLogin){
            return (
                <Container className="mt-5">
                    <div><Toaster/></div>
                    <Row>
                        <Col sm={6} className="content-center">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" required value={this.state.email} onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                            </Form.Group>

                            <Button variant="primary" type="button" onClick={this.handleSubmit}>
                                Login
                            </Button>
                        </Col>
                    </Row>
                </Container>            
            );
        }else{
            return(
                <Redirect to="/dashboard" />
            )
        }
    }
}
  
export default Login;
  