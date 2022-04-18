import React from 'react';
import './Navbar.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="outer-nav-container">
                <div className="inner-container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/recipes">
                                    Recipes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/whats-in-your-fridge">
                                    What's in your fridge
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/decision-maker">
                                    Decision maker
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/login-register">
                                    Login/Register
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/*<header>*/}
            {/*<div className="header-container">*/}
            {/*<img src={img} alt={altText} width="100%" />*/}
            {/*<div className="title-container">*/}
            {/*    <h1>{text}</h1>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*</header>*/}
        </>
            );
};

export default Navbar;