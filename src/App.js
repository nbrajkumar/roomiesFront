
import React, {Component} from 'react';
import './App.css';
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currPage: "Login"
        }
    }

    updateSignup = (event) => {
        this.setState({
            currPage: "Signup"
        });
    };

    updateLogin = (event) => {
        this.setState({
            currPage: "Login"
        });
    };


    render() {
        if (this.state.currPage === "Login") {
            return (
                <LoginPage signupChange={this.updateSignup}/>
            );
        } else if (this.state.currPage === "Signup")    {
            return (
                <SignupPage loginChange={this.updateLogin}/>
            );
        }
    }

}


export default App;
