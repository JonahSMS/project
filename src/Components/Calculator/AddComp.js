import React, {Component} from 'react';
import 'react-flex/index.css';
import "../App.css";

function AddComp(){
    return(
        <div className="smallbox">
            <button onClick={this.addInputs}>
                <h1>+</h1>
            </button>
        </div>
    )
}

export default AddComp;