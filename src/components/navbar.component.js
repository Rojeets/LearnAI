import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="uni">
            <header>
                <div class="logo">
                    <h1>LearnAI</h1>
                </div>
                <nav>
                    <ul>
                        <li className="navbar-item">
                            <Link to="/LearnAI" className="nav-link">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/courses" className="nav-link">Courses</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/login">Login</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
