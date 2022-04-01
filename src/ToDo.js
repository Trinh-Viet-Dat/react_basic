import React, { useState } from "react";
import "./styles.scss";

function ToDo() {
	const initTodo = [];
	const [todo, setTodo] = useState(initTodo);
	const [inputValue, setInputValue] = useState({
		inputValueItem: "",
		inputValueEdit: "",
	});
	const handleInputItem = (e) => {
		const { value, name } = e.target;
		setInputValue({
			...inputValue,
			[name]: value,
		});
	};
	const handleSubmit = () => {
		let newitem = inputValue.inputValueItem;
		let newtodo = JSON.parse(JSON.stringify(todo));
		const arr = {
			item: newitem,
			status: "New",
		};
		newtodo.push(arr);
		setTodo(newtodo);
		inputValue.inputValueItem = " ";
	};
	const handleDelete = (index) => {
		const newitem = JSON.parse(JSON.stringify(todo));
		newitem.splice(index, 1);
		setTodo(newitem);
	};
	const handleStatus = (index, status) => {
		let items = JSON.parse(JSON.stringify(todo));
		items[index].status = status;
		setTodo(items);
	};
	const [isOpenEdit, setIsOpenEdit] = useState(false);
	const handleCloseEdit = () => {
		setIsOpenEdit(!isOpenEdit);
	};
	const handleEdit = (index) => {
		setInputValue({
			...inputValue,
			inputValueEdit: todo[index].item,
			indexInput: index,
		});
		setIsOpenEdit(!isOpenEdit);
	};
	const handleSaveEdit = () => {
		let items = JSON.parse(JSON.stringify(todo)); // spreads operarter
		let index = inputValue.indexInput;
		items[index].item = inputValue.inputValueEdit;
		setTodo(items);
		setIsOpenEdit(!isOpenEdit);
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
						name="inputValueItem"
						value={inputValue.inputValueItem}
						placeholder="What do you want to do ?"
						onChange={handleInputItem}
					/>
					<br />
					<button className="button-add" onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</div>
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
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
						<tbody>
							{todo.map((item, index) => (
								<tr key={index}>
									<td>{item.item}</td>
									<td>{item.status}</td>
									<td>
										<button
											id="conpleted"
											onClick={() =>
												handleStatus(index, "new")
											}
										>
											New
										</button>
										<button
											id="conpleted"
											onClick={() =>
												handleStatus(index, "Depending")
											}
										>
											Depending
										</button>
										<button
											id="conpleted"
											onClick={() =>
												handleStatus(index, "Completed")
											}
										>
											Completed
										</button>
										<button
											id="delete"
											onClick={() => handleDelete(index)}
										>
											Delete
										</button>
										<button
											id="edit"
											onClick={() => handleEdit(index)}
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
			{isOpenEdit && ( // false flagment
				<>
					<div className="Edit">
						<div className="header-Edit">Edit</div>
						<div className="add-edit">
							<table>
								<tbody>
									<tr>
										<td></td>
										<td>
											<input
												type="text"
												value={
													inputValue.inputValueEdit
												}
												name="inputValueEdit"
												onChange={handleInputItem}
											/>
										</td>
										<td>
											<button
												id="changeEdit"
												onClick={handleSaveEdit}
											>
												Save
											</button>
											<button
												id="exitEdit"
												onClick={handleCloseEdit}
											>
												Exit
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default ToDo;
