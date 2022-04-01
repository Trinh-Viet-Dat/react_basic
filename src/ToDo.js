import React, { useState } from "react";
import "./styles.scss";

function ToDo() {
	// const inititems = [
	// 	{
	// 	  name: "Aflreds Futterkiste",
	// 	  status: "new",
	// 	},
	//   ];
	//   const [valueInput, setValueInput] = useState({
	// 	inputTask: "",
	// 	inputEdit: "",
	//   });
	const initTodo = [
		{
			item: "avc",
			status: "New",
		},
	];
	const [todo, setTodo] = useState(initTodo);
	const [input_item, set_input_item] = useState({
		inputEdit: "",
		inputItem: "",
	});

	// const handleInput = (e) => {
	// 	const { value, name } = e.target;
	// 	setValueInput({
	// 	  ...valueInput,
	// 	  [name]: value,
	// 	});
	//   };
	const handleInputItem = (e) => {
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
			status: "New",
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
	const handleCompleted = (index) => {
		let newarr = todo.map((t, id) => {
			if (id === index) {
				return {
					item: t.item,
					status: "Completed",
				};
			}
			return t;
		});
		setTodo(newarr);
	};
	const handleNew = (index) => {
		let newarr = todo.map((t, id) => {
			if (id === index) {
				return {
					item: t.item,
					status: "New",
				};
			}
			return t;
		});
		setTodo(newarr);
	};
	const handleDepending = (index) => {
		let newarr = todo.map((t, id) => {
			if (id === index) {
				return {
					item: t.item,
					status: "Depending",
				};
			}
			return t;
		});
		setTodo(newarr);
	};
	const [isOpenEdit, setIsOpenEdit] = useState(false);
	const handleCloseEdit = () => {
		setIsOpenEdit(!isOpenEdit);
	};

	// const handleEdit = (index) => {
	// 	setValueInput({
	// 	  ...valueInput,
	// 	  inputEdit: items[index].name,
	// 	  indexEdit: index,
	// 	});
	// 	setIsOpenEdit(!isOpenEdit);

	//   };
	const handleEdit = (index) => {
		set_input_item({
			...input_item,
			inputEdit: todo[index].item,
			indexInput: index,
		});
		setIsOpenEdit(!isOpenEdit);
	};

	// const handleSaveEdit = () => {
	// 	let item = [...items];
	// 	let index = valueInput.indexEdit;
	// 	item[index].name = valueInput.inputEdit;
	// 	setItems(item);
	// 	setIsOpenEdit(!isOpenEdit);
	//   };
	const handleSaveEdit = () => {
		let items = [...todo];
		let index = input_item.indexInput;

		items[index].item = input_item.inputEdit;
		set_input_item(items);
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
										<button
											id="conpleted"
											onClick={() => handleNew(index)}
										>
											New
										</button>
										<button
											id="conpleted"
											onClick={() =>
												handleDepending(index)
											}
										>
											Depending
										</button>
										<button
											id="conpleted"
											onClick={() =>
												handleCompleted(index)
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
			{isOpenEdit && (
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
												value={input_item.inputEdit}
												name="inputEdit"
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
