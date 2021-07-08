import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

const Nav = () => {
    return (
        <nav>
            <div className="nav-left">
                <span><Link to="/">#Moods</Link></span>
            </div>
            <div className="nav-right">
                <span><Link to="#">Login</Link></span>
            </div>
        </nav>
    );
};

export default Nav;