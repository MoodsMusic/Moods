import React from 'react';
import "./style.module.css";

const LeftMenu = (props) => {
    return (
        <section className="left-menu">
            {props.children}
        </section>
    );
};

export default LeftMenu;