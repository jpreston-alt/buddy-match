import React from "react";
import Navbar from "../../components/Navbar/index";
import HR from "../../components/HR";
import "./style.css";

function Cover(props) {
    return (
        <div className="uk-cover-container">
            <div className="uk-inline">
                <img src="./images/lake.jpg" alt="" />
                <div className="uk-overlay-default uk-position-cover overlay">
                    <Navbar color={"white"} hoverColor={"blue-hover"} />
                </div>
                <div className="uk-overlay uk-position-center">
                    <h1 className="header">{props.header}</h1>
                    <div className="search-box">
                        {props.searchForm}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cover;