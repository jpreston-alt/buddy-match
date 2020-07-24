import React from "react";
import "./style.css";

function FilterBtn(props) {
    return (
        <span className="filter-tag">
            {props.name}
            <span className="close-icon" uk-icon="icon: close"></span>
        </span>
    )
};

export default FilterBtn;