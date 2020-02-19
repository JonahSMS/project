import React, {Component} from 'react';
import 'react-flex/index.css';
import "./CalcuStuff.css";
//import Container from "./Container.js";
import InputComp from "./InputComp.js";
import AddComp from "./AddComp.js";
import SubComp from "./SubComp.js";
import MulComp from "./MulComp.js";
import DivComp from "./DivComp.js";
import ResultComp from "./ResultComp.js";

class MainBody extends Component {

    // popUpWindow = (sent, x, y) => {
    //     let sum = x+y;

    //     alert(sent + sum);
    // }

    constructor(props){
        super(props);

        this.state = {
            value1: '0',
            value2: '0',
            answer: '0'
        }
    }

    handleInput = (e) => {
        e.preventDefault();
        this.setState({value1: e.currentTarget.value});
    }

    handleInput2 = (e) => {
        e.preventDefault();
        this.setState({value2: e.currentTarget.value});
    }

    handleUpdate = (e) => {
        e.preventDefault();
        this.setState({answer: e.currentTarget.value});
    }

    render(){
        return (
            <div className="superbox"> 
                <div className="box">
                    <InputComp num='1' value={this.state.value1} onValueChange={this.handleInput} />
                    <InputComp num='2' value={this.state.value2} onValueChange={this.handleInput2} />
                
                    <AddComp val1={this.state.value1} val2={this.state.value2} onButtonClick={this.handleUpdate} />
                    <SubComp val1={this.state.value1} val2={this.state.value2} onButtonClick={this.handleUpdate} />
                    <MulComp val1={this.state.value1} val2={this.state.value2} onButtonClick={this.handleUpdate} />
                    <DivComp val1={this.state.value1} val2={this.state.value2} onButtonClick={this.handleUpdate} />

                </div>
                
                <div className="box">
                    <ResultComp ans={this.state.answer} />
                </div>
            </div>
        )
    }
}
      
export default MainBody;
