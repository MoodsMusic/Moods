import React from 'react';
import "./style.css";

const Nav = () => {
    return (
        <nav>
            <div className="nav-left">
                <span>#Moods</span>
                <span>Home</span>
            </div>
            <div className="nav-right">
                <span>Login</span>
            </div>
        </nav>
    );
};

export default Nav;