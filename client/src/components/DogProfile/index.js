import React from "react";
import "./style.css";
import HR from "../../components/HR";

function DogProfile(props) {
    if (props.dog === {}) {
        return <span>Loading...</span>;
    }

    return (
        <div id="info-modal" className="uk-modal-full" uk-modal="true">
            <div className="uk-modal-dialog">
                <button className="uk-modal-close-full uk-close-large" type="button" uk-close="true"></button>
                <div className="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid="true">
                    <div className="uk-background-cover" style={{ backgroundImage: `url(${props.dog.photo})` }} uk-height-viewport="true"></div>
                    <div className="uk-padding-large uk-text-center">
                        <div className="uk-text-center">
                            <h1>Hi, I'm {props.dog.name}.</h1>
                            <HR color="#60da98" />
                        </div>
                        <div className="uk-card info-card">
                            <table className="uk-table profile-table uk-table-divider">
                                <tbody>
                                    <tr className="profile-row">
                                        <th className="profile-item">Age: </th>
                                        <td className="profile-item">{props.dog.age}</td>
                                    </tr>
                                    <tr className="profile-row">
                                        <th className="profile-item">Gender: </th>
                                        <td className="profile-item">{props.dog.gender}</td>
                                    </tr>
                                    <tr className="profile-row">
                                        <th className="profile-item">Breed: </th>
                                        <td className="profile-item">{props.dog.breed}</td>
                                    </tr>
                                    <tr className="profile-row">
                                        <th className="profile-item">Status: </th>
                                        <td className="profile-item">{props.dog.status}</td>
                                    </tr>
                                    <tr className="profile-row">
                                        <th className="profile-item">Location: </th>
                                        <td className="profile-item">{props.dog.location}</td>
                                    </tr>
                                    <tr className="profile-row">
                                        <th className="profile-item">Contact: </th>
                                        <td><span className="value"><a href={`mailto:${props.dog.email}`}>{props.dog.email}</a></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="uk-text-center">
                            <p>
                                Learn more about {props.dog.name} <a href={props.dog.href} target="_blank"> here.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DogProfile;
