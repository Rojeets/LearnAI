import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
    return (
        <>
            <header>
                <div class="logo">
                    <h1>LearnAI</h1>
                </div>
                <nav>
                    <ul>
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/courses" className="nav-link">Courses</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
