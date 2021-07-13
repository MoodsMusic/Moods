import React from 'react';
import "./style.css";

const MessageBox = (props) => {
    return (
        <div className={`message-box alert alert-${props.variant || 'info'} text-center`}
            style={{ background: props.variant ? props.variant : "cyan", color: props.variant ? "white" : "black" }}>
            {props.children}
        </div>
    );
};

export default MessageBox;