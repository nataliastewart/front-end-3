import React, { useState, useContext, useEffect } from 'react';
import { ToDoListContext } from '../ToDoListContext';

const ToDoForm = (props) => {
	const { addTodo, clearList, editToDo, editItem } = useContext(ToDoListContext);
	const [ title, setTitle ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!editItem) {
			addTodo(title);
			setTitle('');
		} else {
			editToDo(title, editItem.id);
		}
	};

	const handleChange = (e) => {
		setTitle(e.target.value);
	};

	useEffect(
		() => {
			if (editItem) {
				setTitle(editItem.title);
				console.log(editItem);
			} else {
				setTitle('');
			}
		},
		[ editItem ]
	);

	return (
		<form onSubmit={handleSubmit} className="form">
			<input
				type="text"
				placeholder="Add Todo..."
				value={title}
				onChange={handleChange}
				required
				className="Todo-input"
			/>
			<div className="buttons">
				<button type="submit" className="btn add-Todo-btn">
					{editItem ? 'Edit Todo' : 'Add Todo'}
				</button>
				<button className="btn clear-btn" onClick={clearList}>
					Clear
				</button>
			</div>
		</form>
	);
};

export default ToDoForm;
