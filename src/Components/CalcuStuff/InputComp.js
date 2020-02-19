import React, {Component} from 'react';
import 'react-flex/index.css';
import "./CalcuStuff.css";

class InputComp extends Component{



    render(){
        const num = this.props.num;

        if(num === '1'){
            return(
                <div className="smallbox">
                    <h1>Input #1</h1>
                    <input placeholder='0' onChange={this.props.onValueChange} type="text" value={this.props.value} />
                    {console.log("Value1: "+ this.props.value)}
                </div>
            )
        } else if (num === '2'){
            return(
                <div className="smallbox">
                    <h1>Input #2</h1>
                    <input placeholder='0' onChange={this.props.onValueChange} type="text" value={this.props.value} />
                    {/* {console.log("Value2: "+ this.props.value)} */}
                </div>
            )
        }
    }
}

export default InputComp;