import React from "react";
import HR from "../HR";
import "./card.css";

function Card(props) {

    const handleSaveClick = (id) => {
        console.log(props);
        let favorites = JSON.parse(localStorage.getItem("favorites"));

        if (favorites === null) {
            favorites = [];
        }

        favorites.push(props);

        localStorage.setItem("favorites", JSON.stringify(favorites));
    };

    return (
        <div className="uk-text-center">
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top uk-cover-container">
                    <img src={props.pic} alt="" uk-cover="true" />
                    <canvas width="300" height="400"></canvas>
                    <div className="uk-overlay uk-light uk-position-bottom btn-overlay">
                        <div className="uk-grid uk-child-width-expand" uk-grid="true">
                            <div>
                                <button
                                    className="icon-btn left-btn"
                                    uk-toggle="target: #info-modal"
                                    onClick={() => props.handleInfoClick(props.id)}
                                >
                                    <span uk-icon="icon: info; ratio: 1.25"></span>
                                </button>
                            </div>
                            <div>
                                <button
                                    className="icon-btn right-btn"
                                    onClick={() => handleSaveClick(props.id)}
                                >
                                    <span uk-icon="icon: heart; ratio: 1.25"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">
                        {props.name}
                    </h3>
                    <HR color="#5ed9977a" />
                    <p className="subtitle">
                        {props.age} &nbsp;-&nbsp; {props.breed}
                    </p>
                    <p className="subtitle">
                        {props.location}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Card;