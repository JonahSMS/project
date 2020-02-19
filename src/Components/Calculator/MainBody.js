import React, {Component} from 'react';
import 'react-flex/index.css';
import "../App.css";
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
            value1: 0,
            value2: 0,
            answer: 0
        }
    }

    setInput1 = (e) => {
        this.setState({value1: e.target.value});
    }

    setInput2 = (e) => {
        this.setState({value2: e.target.value});
    }

    addInputs = () => {
        const ans = parseInt(this.state.value1) + parseInt(this.state.value2);

        this.setState({answer: ans});
    }

    subInputs = () => {
        const ans = parseInt(this.state.value1) - parseInt(this.state.value2);

        this.setState({answer: ans});
    }

    mulInputs = () => {
        const ans = parseInt(this.state.value1) * parseInt(this.state.value2);

        this.setState({answer: ans});
    }

    divInputs = () => {
        const ans = parseInt(this.state.value1) / parseInt(this.state.value2);

        this.setState({answer: ans});
    }

    render(){
        return (
            <div className="superbox"> 
                <div className="box">         
                    <InputComp onChange={e => this.setState({value1: e.target.value}, ()=> console.log(this.state))} />
                    <InputComp onChange={e => this.setState({value2: e.target.value}, ()=> console.log(this.state))} />
                
                    <AddComp onClick={this.addInputs} />
                    <SubComp onClick={this.subInputs} />
                    <MulComp onClick={this.mulInputs} />
                    <DivComp onClick={this.divInputs} />

                </div>
                
                <div className="box">
                    <div className="bigbox">
                        <h1>{this.state.answer}</h1>
                    </div>
                </div>
            </div>

            // <div className="superbox">
            //     <div className="box">
            //         <Container operation='input1' />
            //         <Container operation='input2' />

            //         <Container operation='+' />
            //         <Container operation='-' />
            //         <Container operation='*' />
            //         <Container operation='/' />
            //     </div>

            //     <div className="box">
            //         <Container operation='output' />
            //     </div>
            // </div>
            )
        }

        // let sentence = "The sum is: ";
        // let num1 = 3;
        // let num2 = 5;


        // console.log(sentence + num1 + num2);

        // return(
        //     <div class="clickie">
        //         <button onClick={this.popUpWindow.bind(this, sentence, num1, num2)}>
        //             CLICK ME
        //         </button>
        //     </div>
        // )
}
      
export default MainBody;
