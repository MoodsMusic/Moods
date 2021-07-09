import React from 'react';
import "./style.css";

const Li = (props) => {
    return (
        <li className="li"
            style={{
                cursor: props.cursor ? props.cursor : "auto",
                color: props.color ? props.color : "#000"
            }}
            onClick={props.onClickEvent ? e => props.onClickEvent(e) : () => { }}
        >
            {props.children}
        </li>
    );
};

export default Li;