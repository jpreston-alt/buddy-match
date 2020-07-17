import React from "react";
import "./style.css";

function OrgRow(props) {
    let name;
    if (props.website !== null) {
        name = <a href={props.website} target="_blank">{props.name}</a>
    } else {
        name = props.name
    };

    return (
        <tr>
            <td>{name}
            </td>
            <td>{props.location}</td>
            <td>{props.email}</td>
        </tr>
    )
};

export default OrgRow;