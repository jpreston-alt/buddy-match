import React, { useContext, useState } from "react";
import HR from "../HR";
import "./card.css";
import API from "../../utils/API";
import FavApi from "../../utils/FavApi";
import TokenContext from "../../utils/TokenContext";

function Card(props) {
    const token = useContext(TokenContext);

    const handleSaveClick = (id) => {
        API.getDog(token, id)
            .then(res => {
                let newPet = {
                    name: res.data.name,
                    photo: res.data.photos[0].large,
                    age: res.data.age,
                    email: res.data.contact.email,
                    phone: res.data.contact.phone,
                    gender: res.data.gender,
                    status: res.data.status,
                    breed: res.data.breeds.primary,
                    location: `${res.data.contact.address.city}, ${res.data.contact.address.state}`,
                    href: res.data.url,
                    id: res.data.id
                }
                FavApi.addOne(newPet)
                    .then(res => {
                        console.log(res);
                        alert(`${res.data.name} was added to your favorites!`);
                    })
            })
            .catch(err => console.log(err));
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
                                {
                                    props.page === "search" ? (
                                        <button
                                            className="icon-btn right-btn"
                                            onClick={() => handleSaveClick(props.id)}
                                        >
                                            <span uk-icon="icon: heart; ratio: 1.25"></span>
                                        </button>
                                    ) : (
                                            <button
                                                className="icon-btn right-btn"
                                                onClick={() => props.handleDeleteClick(props.dbID)}
                                            >
                                                <span uk-icon="icon: close; ratio: 1.25"></span>
                                            </button>
                                        )
                                }
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