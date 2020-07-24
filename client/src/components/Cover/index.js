import React from "react";
import Navbar from "../../components/Navbar/index";
import "./style.css";
import image from "../../images/buddy.jpg";

function Cover(props) {
    return (
        <div className="uk-cover-container">
            <div className="uk-inline">
                <img src={image} alt="dog at lake" />
                <div className="uk-overlay-default uk-position-cover overlay">
                    <Navbar color={"#2c3e50f1"} hoverColor={"white-hover"} />
                </div>
                <div className="uk-overlay uk-position-center">
                    <h1 className="header">{props.header}</h1>
                </div>
            </div>
        </div>
    )
};

export default Cover;