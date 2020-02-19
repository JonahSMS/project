import React, {Component} from 'react';
import 'react-flex/index.css';
import "./CalcuStuff.css";

class DivComp extends Component{
    render(){
        if (this.props.val1 === '0' && this.props.val2 === '0'){
            return(
                <div className="smallbox">
                {/* {console.log("Value1: "+ this.props.val1)}
                {console.log("Value2: "+ this.props.val2)} */}
                    <button onClick={this.props.onButtonClick} className="block" value='0'>
                        <h1>/</h1>
                    </button>
                </div>
            )
        } else { 
            return (
                <div className="smallbox">
                {/* {console.log("Value1: "+ this.props.val1)}
                {console.log("Value2: "+ this.props.val2)} */}
                    <button onClick={this.props.onButtonClick} className="block" value={parseInt(this.props.val1) / parseInt(this.props.val2)}>
                        <h1>/</h1>
                    </button>
                </div>
            )
        }
    }
}

export default DivComp;