import React, {Component} from 'react';
import 'react-flex/index.css';
import "./ArrayStuff.css";
import PersonList from "./PersonList.js";
import ffxivlogo from "./images/ffxiv.png";
import ffviiilogo from "./images/ffviii.png";
import ffvilogo from "./images/ffvi.png";
import ffviilogo from "./images/ffvii.png";
import users from "./users.js";

class ArrayBody extends Component{
    constructor(props){
        super(props);

        this.state = {
            iconList: [
                {
                    logo: ffxivlogo,
                    id: '1'
                },
                {
                    logo: ffvilogo,
                    id: '2'
                },
                {
                    logo: ffviilogo,
                    id: '3'
                },
                {
                    logo: ffviiilogo,
                    id: '4'
                },
                {
                    logo: ffxivlogo,
                    id: '5'
                },
                {
                    logo: ffviilogo,
                    id: '6'
                }
            ],

            searchField: '',
        }
    }

    handleChange = () => {

    }

    render(){
        return(
            <div className="ArrayStuff">
                <div className="superbox">
                    <PersonList people={users} icons={this.state.iconList} />
                </div>
            </div>
        )
    }
}

export default ArrayBody;