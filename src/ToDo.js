import React from "react";
import "./styles.scss";

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            array: [
                {
                    id: "1",
                    item: "abc",
                    status: "Complete",
                },
                {
                    id: "w",
                    item: "ab",
                    status: "Complete",
                },
                {
                    id: "3",
                    item: "a",
                    status: "Complete",
                },
            ],
        };
    }
    changeInputValue = (event) => {
        this.setState({
            value: event.target.value,
        });
    };
    handleSubmitValue = () => {
        if (this.state.value === "") {
            alert("Not DaTa!");
            return;
        } else {
            const object = {
                id: "",
                item: this.state.value,
                status: "",
            };
            const arr = this.state.array;
            arr.push(object);
            this.setState({
                array: arr,
            });

            // this.setState((prevState) => ({
            //     array: [...prevState.array, this.state.value],
            //     value: "",
            // }));
        }
    };
    handleDelete = (id) => {
        this.setState((state) => {
            const array = state.array.filter((element) => element.id !== id);
            return {
                array,
            };
        });
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
                            name="input"
                            value={this.state.value}
                            placeholder="What do you want to do ?"
                            onChange={(event) => this.changeInputValue(event)}
                        />
                        <br />
                        <button
                            className="button-add"
                            onClick={() => this.handleSubmitValue()}
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
                                {this.state.array.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.item}</td>
                                            <td>{item.status}</td>
                                            <td>
                                                <button id="conpleted">
                                                    Completed
                                                </button>
                                                <button
                                                    id="delete"
                                                    onClick={() => {
                                                        this.handleDelete(
                                                            item.id
                                                        );
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                                <button
                                                    id="edit"
                                                    onClick={() => {
                                                        this.handleEdit();
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDo;
