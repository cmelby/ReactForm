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

    render() {
        return (
            <div className="landing">
                <Nav name={this.state.name}/>
                <div className="landing_form">
                    <form>
                        <Input name="name" type="text" change={this.handleChange}/>
                        <div className="landing_submit-btn">
                            <Input type="submit" value="Join"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Landing;
