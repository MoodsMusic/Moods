import React from 'react';
import "./style.css";

const Info = (props) => {
    return (
        <div className="info">
            {props.children}
        </div>
    );
};

export default Info;