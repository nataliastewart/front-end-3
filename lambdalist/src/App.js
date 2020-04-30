import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import ToDoListContextProvider from './ToDoListContext';
import Login from './components/Login';

function App() {
	return (
		<Router>
			<ToDoListContextProvider>
				<div className="App">
					<div className="container">
						<div className="app-wrapper">
							<header>
								<NavBar />
							</header>
							<div className="main">
								<SignUp />
								<Login />

								<Switch>
									<PrivateRoute exact path="/ToDoList" component={ToDoList} />
									<PrivateRoute exact path="/ToDoForm" component={ToDoForm} />
								</Switch>

								<section className="section">
									<h1> Lambda List </h1>
								</section>
							</div>
						</div>
					</div>
				</div>
			</ToDoListContextProvider>
		</Router>
	);
}

export default App;
