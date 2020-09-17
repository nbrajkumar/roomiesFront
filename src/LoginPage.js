import React from 'react';
import './App.css';
import Loginner from "./Loginner.js";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            token: null
        };
    }



    updateUsername = (event) => {
        this.setState({
            username: event.target.value
        });
    };

    updatePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    };

    loginRequest = async () => {
        //Requests path from this.state start to end
        try{
            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            };
            let response = await fetch("http://localhost:8080/api/auth/signin", settings);

            if(!response.ok)    {
                alert(this.state.username + " " + this.state.password);
                return;
            }

            let authTokenPromise = response.json();
            let authToken = await authTokenPromise;

            this.setState({
                token: authToken.accessToken
            });
        }catch (e) {
            alert("Error!");
        }
    };


    render() {
        // TODO: use onClick={this.props.onClick}
        // TODO: replace this.state.value with this.props.value
        return (
            <div>
                <Loginner usernameValue={this.state.username} passwordValue={this.state.password}
                          usernameChange={this.updateUsername} passwordChange={this.updatePassword} submit={this.loginRequest}
                            verified={this.state.token}/>
                <br/>
                <button onClick={this.props.signupChange}>Sign Up</button>
            </div>
        );
    }
}

// ========================================

export default LoginPage;
