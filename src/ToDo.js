import React, { useState } from "react";
import "./styles.scss";
function ToDo() {
	const initTodo = [
		{
			item: "avc",
			status: "aá",
		},
	];
	const [todo, setTodo] = useState(initTodo);
	const [input_item, set_input_item] = useState({
		inputItem: "",
	});
	const handleInputItem = (e) => {
		console.log(e.target.value);
		const { value, name } = e.target;
		set_input_item({
			...input_item,
			[name]: value,
		});
	};
	const handleSubmit = () => {
		let newitem = input_item.inputItem;
		let newtodo = [...todo];
		const arr = {
			item: newitem,
			status: "abc",
		};
		newtodo.push(arr);
		setTodo(newtodo);
		input_item.inputItem = " ";
	};
	const handleDelete = (index) => {
		const newitem = [...todo];
		newitem.splice(index, 1);
		setTodo(newitem);
	};
	const handleEdit = (index) => {
		let newinput = prompt("Nhập công việc mới : ", "your work here....");
		let arr = {
			item: newinput,
			status: "oke",
		};
		let newarr = [...todo];
		newarr.splice(index, 1, arr);
		setTodo(newarr);
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
						value={input_item.inputItem}
						placeholder="What do you want to do ?"
						onChange={handleInputItem}
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
							{todo.map((item, index) => (
								<tr key={index}>
									<td>{item.item}</td>
									<td>{item.status}</td>
									<td>
										<button id="conpleted">
											Completed
										</button>
										<button
											id="delete"
											onClick={(index) =>
												handleDelete(index)
											}
										>
											Delete
										</button>
										<button
											id="edit"
											onClick={(index) =>
												handleEdit(index)
											}
										>
											Edit
										</button>
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
