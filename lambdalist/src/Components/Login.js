import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = () => {
	const history = useHistory();

	const [ credentials, setCredentials ] = useState({
		username: '',
		password: ''
	});

	const handleChange = (event) => {
		setCredentials({ ...credentials, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('Login was pushed');
		axiosWithAuth()
			.post('api/auth/login/', credentials)
			.then((response) => {
				console.log('Response --> ', response);
				localStorage.setItem('token', JSON.stringify(response.data.payload));
				history.push('/protected');
			})
			.catch((error) => {
				console.log('Post error ', error);
			});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label> Username </label> 
				<input
					name="username"
					type="text"
					placeholder="username"
					value={credentials.username}
					onChange={handleChange}
				/>

				<label >Password </label>
				<input
					name="password"
					type="text"
					placeholder="password"
					value={credentials.password}
					onChange={handleChange}
				/>

				<button type="submit">Log in</button>
			</form>
		</div>
	);
};

export default Login;
