// login/ sign up / sign out

import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";


const NavBar = () => {
  return (
    <Router>
      <div className="nav-bar">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
};

export default NavBar;
