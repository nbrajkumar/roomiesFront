import React, {Component} from 'react';

class Loginner extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.verified === null) {
            return (
                <div id="loginner">
                    <label>
                        Username: <input type="text" value={this.props.usernameValue}
                                         onChange={this.props.usernameChange}></input>

                        Password: <input type="password" value={this.props.passwordValue}
                                         onChange={this.props.passwordChange}></input>
                        <button onClick={this.props.submit}>Login</button>
                    </label>
                </div>
            );
        } else {
            return (
                <div id="loginner">
                    <label>
                        Success and authentication token was {this.props.verified}
                    </label>
                </div>
            );
        }
    }
}

export default Loginner;
