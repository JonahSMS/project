import React, {Component} from 'react';
import 'react-flex/index.css';
import "./LoginBox.css";
import users from "./users.js";
// import ffxivlogo from "./images/ffxiv.png";
// import ffviiilogo from "./images/ffviii.png";
// import ffvilogo from "./images/ffvi.png";
// import ffviilogo from "./images/ffvii.png";
import LoginStuff from "./LoginStuff.js";
import LoginButton from "./LoginButton.js";
import DisplayOnline from "./DisplayOnline.js";
//import StatusBar from "./StatusBar.js";

class LoginBox extends Component{
    constructor(props){
        super(props);

        this.state = {
            status: '0',
            onlineUsers: [],
            tempUsername: '',
            tempPassword: ''
        }
    }

    onLogin = () => {
        let tempUser, tempList;
        tempList = this.state.onlineUsers;

        //console.log(users);

        tempUser = users.filter(user => {
            return user.name === this.state.tempUsername && user.password === this.state.tempPassword
        });

        if (tempUser){
            tempList = tempList.concat(tempUser);
            //this.setState({status: '2'});
        } 
        //else this.setState({status: '1'});

        this.setState({onlineUsers: tempList});

    }

    setOffline = (username) => {
        this.setState({onlineUsers: this.state.onlineUsers.filter(user => {
            return user.name !== username })});
        
        //console.log(this.state.onlineUsers);
        console.log("Set " + username + " offline");
    }

    handleUsername = (e) => {
        e.preventDefault();
        this.setState({tempUsername: e.currentTarget.value});
    }

    handlePassword = (e) => {
        e.preventDefault();
        this.setState({tempPassword: e.currentTarget.value});
    }
    
    render(){
        return (

            <div className="LoginBox">
                <div className="leftouterbox">
                    <div className="leftinnerbox">
                        <LoginStuff num='1' onUsernameChange={this.handleUsername} value={this.state.tempUsername} />
                        <LoginStuff num='2' onPasswordChange={this.handlePassword} value={this.state.tempPassword} />
                        <br/>
                        <LoginButton onLoginClick={this.onLogin} />
                    </div>
                </div>
                    
                <div className="rightbox">
                    <DisplayOnline userList={this.state.onlineUsers} onDivClick={this.setOffline} />
                </div>
            </div>
        )
    }
}

export default LoginBox;