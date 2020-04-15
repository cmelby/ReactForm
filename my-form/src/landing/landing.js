import React, {Component} from 'reeact';
import "./landing.css";
import Nav from "../components/nav";
import Input from "../components/input";


class Landing extends Component {
    state = {

    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }



}