import React, {Component} from 'react';
import 'react-flex/index.css';
import "../App.css";

function SubComp(){
    return(
        <div className="smallbox">
            <button onClick={this.subInputs}>
                <h1>-</h1>
            </button>
        </div>
    )
}

export default SubComp;