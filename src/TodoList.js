import React from "react";
import "./styles.scss";

class TodoList extends React.Component {
    constructor(props) {}

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.item}</td>
                                <td>{item.status}</td>
                                <td>
                                    <button id="conpleted">Completed</button>
                                    <button
                                        id="delete"
                                        onClick={() => {
                                            this.handleDelete(item.id);
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
        );
    }
}

export default TodoList;
