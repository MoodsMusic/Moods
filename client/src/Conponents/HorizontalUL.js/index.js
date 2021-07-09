import React from 'react';
import "./style.css";

const HorizontalUL = (props) => {
    return (
        <ul className="h-ul">
            {props.children}
        </ul>
    );
};

export default HorizontalUL;