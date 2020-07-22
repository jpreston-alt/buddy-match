import React from "react";
import Row from "./Row";
import "./style.css";

function Table(props) {
    return (
        <div className="uk-card-default">
            <table className="uk-table uk-table-divider uk-text-center">
                <thead>
                    <tr>
                        <th>Organization</th>
                        <th>Location</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.organizations.map(el => {
                            return <Row
                                name={el.name}
                                location={`${el.address.city}, ${el.address.state}`}
                                email={el.email}
                                phone={el.phone}
                                website={el.website}
                                key={el.id}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
};

export default Table;