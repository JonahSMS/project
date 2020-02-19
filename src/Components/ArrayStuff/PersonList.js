import React, {Component} from 'react';
import 'react-flex/index.css';
import "./ArrayStuff.css";
import users from "../LoginBox/users.js";

class PersonList extends Component {
    constructor(props){
        super(props);

        this.state = {
            filtered: []
        }
    }

    componentDidMount = () => {
        this.setState({
          filtered: this.props.people
        });
    }
      
    componentWillReceiveProps  = (nextProps) => {
        this.setState({
          filtered: nextProps.people
        });
    }

    handleChange = (e) => {
        // Variable to hold the original version of the list
        let currentList = [];
        // Variable to hold the filtered list before putting into state
        let newList = [];

        // If the search bar isn't empty
        if (e.target.value !== "") {
            // Assign the original list to people
            currentList = this.props.people;

            var searchValue = e.currentTarget.value;
            newList = currentList.filter((item) => {
                return Object.keys(item).some(key => item[key].toLowerCase().includes(searchValue));
            });
        } else {
            // If the search bar is empty, set newList to original task list
            newList = this.props.people;
        }
            // Set the filtered state based on what our rules added to newList
        this.setState({
            filtered: newList
        });
    }

    render() {

        /* const filteredUsers = this.props.people.filter(person =>
            person.name.toLowerCase().includes()) */

        const userLength = users.length;

        return (
            <div>
                <input type="search" placeholder="Search..." onChange={this.handleChange} />

                { this.state.filtered.map(people =>
                    <h1 key={people.id}>

                        <div className="box">
                            <div className="lefthalf">
                                <img src={this.props.icons[people.id-1].logo} className="styledimg"/>
                            </div>
                            <div>
                                Username: {people.username}<br/>
                                Occupation: {people.occupation}<br/>
                            </div>
                        </div>

                    </h1>
                    )
                }
            </div>
        )
    }
}

export default PersonList;