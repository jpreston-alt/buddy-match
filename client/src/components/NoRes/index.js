import React from "react";
import "./style.css";

function NoRes(props) {
    return (
        <div className="uk-text-center nores-container">
            <h4 className="nores-text">Search for {props.type} Above</h4>
        </div>
    )
};

export default NoRes;