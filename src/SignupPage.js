import React from 'react';
import './App.css';
import Signupper from "./Signupper.js";

class SignupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            dob: "",
            roles: null,
            email: ""
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

    updateDOB = (event) => {
        this.setState({
            dob: event.target.value
        });
    };

    updateEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    };

    updateRoles = (event) => {
        var options = event.target.options;
        var values = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                values.push(options[i].value);
            }
        }
        this.setState({
            roles: values
        });
    };

    signupRequest = async () => {
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
                    password: this.state.password,
                    dob: this.state.dob,
                    location: "h:o:i",
                    roles: this.state.roles,
                    email: this.state.email
                })
            };
            let response = await fetch("http://localhost:8080/api/auth/signup", settings);

            if(!response.ok)    {
                alert(response.error());
                return;
            }

            alert("Success! made a user account");
        }catch (e) {
            alert(e.toString());
        }
    };


    render() {
        // TODO: use onClick={this.props.onClick}
        // TODO: replace this.state.value with this.props.value
        return (
            <div>
                <Signupper usernameValue={this.state.username} passwordValue={this.state.password}
                           emailValue={this.state.email} dobValue={this.state.dob} rolesValue={this.state.roles}
                          usernameChange={this.updateUsername} passwordChange={this.updatePassword}
                           emailChange={this.updateEmail} dobChange={this.updateDOB} rolesChange={this.updateRoles}
                           submit={this.signupRequest}
                          verified={this.state.token}/>
                <br/>
                <button onClick={this.props.loginChange}>Login</button>
            </div>
        );
    }
}

// ========================================

export default SignupPage;
