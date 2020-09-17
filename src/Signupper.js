import React, {Component} from 'react';

class Signupper extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let types = ["user", "admin", "pro_user"];
        let options = [];

        for (var i = 0; i < 3; i++) {
            options[i] = <option value={types[i]}>{types[i]}</option>
        }

            return (
                <div id="Signupper">
                    <label>
                        Username: <input type="text" value={this.props.usernameValue}
                                         onChange={this.props.usernameChange}></input>

                        Password: <input type="password" value={this.props.passwordValue}
                                         onChange={this.props.passwordChange}></input>
                        <br/>
                        Email: <input type="text" value={this.props.emailValue}
                                         onChange={this.props.emailChange}></input>
                        Date of Birth: <input type="date" value={this.props.dobValue}
                                              onChange={this.props.dobChange}></input>
                        Account Type(s): <select multiple={true} value={this.props.rolesValue} onChange={this.props.rolesChange}>
                        {options}</select>
                        <button onClick={this.props.submit}>Signup</button>
                    </label>
                </div>
            );
    }
}

export default Signupper;
