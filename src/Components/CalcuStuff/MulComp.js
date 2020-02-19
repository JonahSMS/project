import React, {Component} from 'react';
import 'react-flex/index.css';
import "./CalcuStuff.css";

class MulComp extends Component{
    render(){
        return(
            <div className="smallbox">
            {/* {console.log("Value1: "+ this.props.val1)}
            {console.log("Value2: "+ this.props.val2)} */}
                <button onClick={this.props.onButtonClick} className="block" value={parseInt(this.props.val1) * parseInt(this.props.val2)}>
                    <h1>X</h1>
                </button>
            </div>
        )
    }

}

export default MulComp;