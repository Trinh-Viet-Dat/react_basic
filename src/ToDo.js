import React, { useState } from "react";
import "./styles.scss";
function ToDo() {
    const initTodo = [
        {
            item: "",
            status: "",
        },
    ];
    const [state, setState] = useState(initTodo);

    const [item, setItem] = useState({
        inputItem: "",
    });
    const handleOnchangeInput = (event) => {
        const { value, name } = event.target;
        console.log(event.target.value);
        setItem({
            ...item,
            [name]: value,
        });
    };
    const handleSubmit = () => {
        let newitem = item.inputItem;
        let states = [...state];
        let newArr = {
            item: newitem,
            status: "ascs",
        };
        states.push(newArr);
        setState(states);
    };
    return (
        <div className="Todo">
            <h1> ToDos </h1>
            <div className="add">
                <div className="header-add">Add a Task</div>
                <div className="content-add">
                    <p>Item</p>
                    <input
                        type="text"
                        className="input-add"
                        name="inputItem"
                        placeholder="What do you want to do ?"
                        value={item.inputItem}
                        onChange={handleOnchangeInput}
                    />
                    <br />
                    <button className="button-add" onClick={handleSubmit}>
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
                            {state.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.item}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        <button id="conpleted">
                                            Completed
                                        </button>
                                        <button id="delete">Delete</button>
                                        <button id="edit">Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ToDo;
