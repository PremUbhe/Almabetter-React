import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" data-aos="fade-down">
                <div className="container" id="navbar">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-brand p-2" to="#"><img src="./static/logo.png" alt="Not found" style={{ width: '150px' }} /></div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Courses</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link" to="*">Practice</NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="*">Free Tutorials</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="*">Articles</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="*">Coding Problems</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="*">Free Quizzes</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="*">Learning Videos</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="*">Events</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link" to="*">Placements</NavLink>
                                <ul className="dropdown-menu ">
                                    <li><NavLink className="dropdown-item" to="*">Success Stories</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="*">Placement Statistics</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="*">Community</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="*">Hire From Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="*">Refer & Earn</NavLink>
                            </li>
                        </ul>
                        <button className="btn btn-outline-danger " id="nav-btn">SIGN IN</button>

                    </div>

                </div>
            </nav>
        </>
    );
}

export default Navbar;