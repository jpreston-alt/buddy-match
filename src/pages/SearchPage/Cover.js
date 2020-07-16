import React from "react";
import Navbar from "../../components/Navbar"
import SearchForm from "./SearchForm";
import "./style.css";

function Cover(props) {
    return (
        <div className="uk-cover-container">
            <div className="uk-inline">
                <img src="./images/lake.jpg" alt="" />
                <div className="uk-overlay-default uk-position-cover overlay">
                    <Navbar color={"white"} />
                </div>
                <div className="uk-overlay uk-position-center">
                    <h1 className="header">Find Your Perfect Buddy</h1>
                    <div className="search-box">
                        <SearchForm />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cover;