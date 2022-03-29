import React from "react";
import "./styles.scss";

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
        };
    }
    changeInputValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    handleSubmitValue = (event) => {
        console.log(this.state);
    };
    render() {
        return (
            <div className="ToDo">
                <h1> ToDos </h1>
                <div className="Add">
                    <div className="header-add">Add a Task</div>
                    <div className="content-add">
                        <p>Item</p>
                        <input
                            type="text"
                            className="input-add"
                            placeholder="What do you want to do ?"
                            onChange={(event) => this.changeInputValue(event)}
                        />
                        <br />
                        <button
                            className="button-add"
                            onClick={(event) => this.handleSubmitValue(event)}
                        >
                            Submit
                        </button>
                    </div>
                </div>
                <br />
                <div className="Task">
                    <div className="header-task">Task</div>
                    <div className="add-task">
                        <table>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Buy Ben</td>
                                    <td>Not Completed</td>
                                    <td>
                                        <button id="conpleted">
                                            Completed
                                        </button>
                                        <button id="delete">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Buy Ben</td>
                                    <td>Not Completed</td>
                                    <td>
                                        <button id="conpleted">
                                            Completed
                                        </button>
                                        <button id="delete">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDo;
