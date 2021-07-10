import React from 'react';
import "./style.css";

const Li = (props) => {
    return (
        <li className="li"
            style={{
                cursor: props.cursor ? props.cursor : "auto",
                color: props.color ? props.color : "#000"
            }}
            onClick={props.onClickEvent ? props.onClickEvent[0]
                ? e => {
                    props.onClickEvent[0](e);
                    props.onClickEvent[1]({ type: props.actionType });
                }
                : () => { }
                : () => { }}
        >
            {props.children}
        </li>
    );
};

export default Li;