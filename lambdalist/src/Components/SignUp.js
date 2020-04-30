import React from 'react';
import axios from 'axios';
import useForm from './useForm';
import Validate from './Validate';

const SignUp = () => {
	const { handleChange, handleSubmit, values, errors } = useForm(submit, Validate); // This deconstructs useForm and passes in the submit function as a callback.

	function submit() {
		axios
			.post('https://lambdawunderlist.herokuapp.com/api/auth/register', values)
			.then((res) => {
				console.log('Success!', res);
			})
			.catch((err) => {
				console.log(err.response);
			});
	}

	return (
		<div>
			<form onSubmit={handleSubmit} noValidate>
				<div>
					<label>Username</label>
					<div>
						<input
							name="username"
							type="text"
							placeholder="username"
							value={values.username}
							onChange={handleChange}
						/>
						{errors.username && <p>{errors.username}</p>}
					</div>
				</div>
				<div>
					<label>Email</label>
					<div>
						<input
							name="email"
							type="email"
							placeholder="email"
							value={values.email}
							onChange={handleChange}
						/>
						{errors.email && <p>{errors.email}</p>}
					</div>
				</div>
				<div>
					<label>Password</label>
					<div>
						<input
							placeholder="password"
							name="password"
							type="password"
							value={values.password}
							onChange={handleChange}
						/>
						{errors.password && <p>{errors.password}</p>}
					</div>
				</div>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default SignUp;
