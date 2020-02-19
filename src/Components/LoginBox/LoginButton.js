import React, {Component} from 'react';
import 'react-flex/index.css';

class LoginButton extends Component {
    render(){
        return(
            <div onClick={this.props.onLoginClick} className="loginbutton" >
                <h1>Login</h1>
            </div>
        )
    }
}

export default LoginButton;
