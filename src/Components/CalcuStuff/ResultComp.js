import React, {Component} from 'react';
import 'react-flex/index.css';
import "./CalcuStuff.css";

class ResultComp extends Component{
    render(){
        return(
            <div className="bigbox">
                <h1>Result</h1>
                <h1>{this.props.ans}</h1>
            </div>
        )
    }
}

export default ResultComp;