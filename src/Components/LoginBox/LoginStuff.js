import React, {Component} from 'react';
import 'react-flex/index.css';
import "./LoginBox.css";

class LoginStuff extends Component{

    render(){
        const num = this.props.num;

        if(num === '1'){
            return(
                <div className="boxu">
                    Username <br/>
                    <input onChange={this.props.onUsernameChange} type="text" value={this.props.value} />
                    {/* {console.log("Username: "+ this.props.value)} */}
                </div>
            )
        } else if (num === '2'){
            return(
                <div className="boxu">
                    Password <br/>
                    <input onChange={this.props.onPasswordChange} type="password" value={this.props.value} />
                    {/* {console.log("Password: "+ this.props.value)} */}
                </div>
            )
        }
   }
}

export default LoginStuff;