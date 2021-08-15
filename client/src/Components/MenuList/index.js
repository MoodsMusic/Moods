import React from 'react';
import "./style.module.css";

const MenuList = (props) => {
    return (
        <div className="menu-list">
            {props.children}
        </div>
    );
};

export default MenuList;