import React from "react";
import { push as Menu } from "react-burger-menu";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';


class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startDate: window.localStorage.getItem('startDate'),
            endDate: window.localStorage.getItem('endDate'),
            type: window.localStorage.getItem('type'),
            pieData: JSON.parse(window.localStorage.getItem('pieData')) ,
            barData:  JSON.parse(window.localStorage.getItem('barData')) ,
            lineData:  JSON.parse(window.localStorage.getItem('lineData'))
        }

        this.setStartDate = this.setStartDate.bind(this)
        this.setEndDate = this.setEndDate.bind(this)
        this.setType = this.setType.bind(this)
        this.applyFilter = this.applyFilter.bind(this)
        this.resetFilter = this.resetFilter.bind(this)
    }

    resetFilter(){
        window.localStorage.setItem('startDate',new Date())
        window.localStorage.setItem('endDate',new Date(new Date(new Date()).setDate(new Date().getDate()+ 30)))
        window.localStorage.setItem('type',"all")
        window.location.reload()
    }

    applyFilter(){
        window.location.reload()
    }

    setType(event){
        const target = event.target;
        const value = target.value;

        this.setState({
            type: value
        })
        window.localStorage.setItem('type',value)
    }

    setStartDate(date){
        this.setState({
            startDate: date
        })
        window.localStorage.setItem('startDate',date)
    }

    setEndDate(date){
        this.setState({
            endDate: date
        })
        window.localStorage.setItem('endDate',date)
    }

    render(){
        return (
            // Pass on our props
            <Menu {...this.props}>
                <Form>
                    <Form.Group>
                        <Form.Label>Survey Type</Form.Label>
                        <Form.Control as="select" onChange={this.setType}>
                            {this.state.type === "all" ? <option value="all" selected>All</option> : <option value="all">All</option>}
                            {this.state.type === "1" ? <option value="1" selected>Best Programming Language</option> : <option value="1">Best Programming Language</option>}
                            {this.state.type === "2" ? <option value="2" selected>Best City</option> : <option value="2">Best City</option>}
                            {this.state.type === "3" ? <option value="3" selected>Best Country</option> : <option value="3">Best Country</option>}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Start Date</Form.Label>
                        <DatePicker selected={new Date(this.state.startDate)} onChange={(date) => this.setStartDate(date)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>End Date</Form.Label>
                        <DatePicker selected={new Date(this.state.endDate)} onChange={(date) => this.setEndDate(date)} />
                    </Form.Group>
                    <Form.Group className="mt-5">
                        <Button variant="secondary" onClick={this.applyFilter}>Apply Filter</Button>
                        <Button className="ml-4" variant="secondary" onClick={this.resetFilter}>Reset</Button>
                    </Form.Group>
                </Form>
            </Menu>
        );
    }
}
export default Sidebar;
