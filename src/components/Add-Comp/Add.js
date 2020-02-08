import React, { Component } from 'react';
import './add.css';

class Add extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        task: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let textInput = document.getElementById("task");
        textInput.value === '' ? alert("You Can't add an Empty Task") : this.props.addItem(this.state);
        textInput.value = '';
    }

    render() {
        return (
            <div className="addComp">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="task"  requird="true" autoComplete="off" onChange={this.handleChange} />
                    <button type="submit">Add New Task</button>
                </form>
            </div>
        );
    }
}

export default Add;