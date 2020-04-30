import React, { useContext } from 'react';
// import { axiosWithAuth } from "../utils/axiosWithAuth"
import { ToDoListContext } from '../ToDoListContext';

const ToDoList = () => {
	const { todos } = useContext(ToDoListContext);

	return (
		<div>
			{todos.length ? (
				<ul className="list">
					{todos.map((todo) => {
						return <todo todo={todo} key={todo.id} />;
					})}
				</ul>
			) : (
				<div className="no-todos">No todos</div>
			)}
		</div>
	);
};

export default ToDoList;
