import React, {Component} from 'react';
import 'react-flex/index.css';
import "../App.css";

function Container() {
        if (this.props.operation === 'input1'){
            return (               
                <div className="smallbox">
                    <input type="search" placeholder="0" onChange={this.setInput1} value={this.state.value1}/>
                </div>
            )
        } else if (this.props.operation === 'input2'){
            return (               
                <div className="smallbox">
                    <input type="search" placeholder="0" onChange={this.setInput2} value={this.state.value2}/>
                </div>
            )
        } else if (this.props.operation === '+'){
            return (               
                <div className="smallbox">
                    <button onClick={this.addInputs}>
                        <h1>+</h1>
                    </button>
                </div>
            )
        } else if (this.props.operation === '-'){
            return (
                <div className="smallbox">
                    <button>
                        <h1>-</h1>
                    </button>
                </div>
            )
        } else if (this.props.operation === '*'){
            return (
                <div className="smallbox">
                    <button>
                        <h1>*</h1>
                    </button>
                </div>
            )
        } else if (this.props.operation === '/'){
            return (
                <div className="smallbox">
                    <button>
                        <h1>/</h1>
                    </button>
                </div>
            )
        } else if (this.props.operation === 'output'){
            return (
                <div className="bigbox">
                    <h1>{this.state.answer}</h1>
                </div>
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
      
export default Container;
