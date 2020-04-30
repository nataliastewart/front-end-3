import React, { useContext } from './node_modules/react';
import { ToDoListContext } from '../ToDoListContext';

const ToDo = ({ todo }) => {
	const { removeTodo, findItem } = useContext(ToDoListContext);

	return (
		<div>
			<li className="list-item">
				<span>{todo.title}</span>
				<div>
					<button onClick={() => removeTodo(todo.id)} className="btn-delete-todo">
						Delete
					</button>
					<button className="btn-edit-todo">Edit</button>
					<button onClick={() => findItem(todo.id)} className="btn-edit todo-btn">
						<i className="fas fa-pen" />
					</button>
				</div>
			</li>
		</div>
	);
};

export default ToDo;
