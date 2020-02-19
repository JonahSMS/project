import React, {Component} from 'react';
import 'react-flex/index.css';
import "./LoginBox.css";

class DisplayOnline extends Component{

    render(){
            return(
                <div>
                    { console.log(this.props.userList) }
                    { this.props.userList.map((users, i) => { 
                            return(
                                <ul key={i}>
                                    <div className="box" onClick={() => this.props.onDivClick(users.name)}>
                                        <div>
                                            Name: {users.name}<br/>
                                            Occupation: {users.occupation}<br/>
                                        </div>
                                    </div>
                                </ul>
                            )
                        })
                    }
                </div>
            )
    }
}

export default DisplayOnline;