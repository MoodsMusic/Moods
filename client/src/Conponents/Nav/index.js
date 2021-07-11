import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Nav = () => {
    const locationVar = useLocation();
    let location = "home";

    if (locationVar.pathname === "/login") location = "login";
    else if (locationVar.pathname === "/register") location = "register";

    return (
        <nav className={`nav nav-${location}`}>
            <div className="nav-left">
                <span><Link to="/">#Moods</Link></span>
            </div>
            <div className="nav-right">
                {/* Only show login if not on login page */}
                {!(locationVar.pathname === "/login" || locationVar.pathname === "/register") ? (
                    <span><Link to="/login">Login</Link></span>
                ) : <div></div>}
            </div>
        </nav>
    );
};

export default Nav;