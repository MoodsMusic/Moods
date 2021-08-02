import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import "./style.css";
import { logout } from '../../Actions/userActions';

const Nav = () => {
    const dispatch = useDispatch();
    // Get login Info from state
    const userLoginInfo = useSelector(state => state.userLogin);
    const { userInfo } = userLoginInfo;

    // Determines browser location
    const locationVar = useLocation();
    let location = "home";

    if (locationVar.pathname === "/login") location = "login";
    else if (locationVar.pathname === "/register") location = "register";

    // Logs user out when logout button clicked
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    };

    return (
        <nav className={`nav nav-${location}`}>
            <div className="nav-left">
                <span><Link to="/">#Moods</Link></span>
            </div>
            <div className="nav-right">
                {/* Only show login if not on login page */}
                {!(locationVar.pathname === "/login" || locationVar.pathname === "/register") ? (
                    !userInfo ? (
                        <span><Link to="/login">Login</Link></span>
                    ) : (
                        <span><Button
                            onClick={e => handleLogout(e)}
                            variant="text" size="large" className={"text-light btn-large"}
                        >Logout</Button></span>
                    )
                ) : <div></div>}
            </div>
        </nav>
    );
};

export default Nav;