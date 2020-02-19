import React, {Component} from 'react';
import 'react-flex/index.css';

class StatusBar extends Component {
    render(){
        if(this.props.status === '0')
            return(<div/>)
        else if(this.props.status === '1'){
            return(
                <div>
                    Invalid username/password.
                </div>
            )
        } else if (this.props.status === '2'){
            return(
                <div>
                    Login successful.
                </div>
            )
        }
    }
}

export default StatusBar;
