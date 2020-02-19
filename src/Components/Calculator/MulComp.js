import React, {Component} from 'react';
import 'react-flex/index.css';
import "../App.css";

function MulComp(){
    return(
        <div className="smallbox">
            <button onClick={this.mulInputs}>
                <h1>*</h1>
            </button>
        </div>
    )
}

export default MulComp;