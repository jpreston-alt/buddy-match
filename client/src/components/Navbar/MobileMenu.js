/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function MobileMenu(props) {
    return (
        <div id="menu-canvas" uk-offcanvas="overlay: true">
            <div className="uk-offcanvas-bar">
                <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                <ul className="uk-list">
                    <li><Link to="/" className="nav-item mobile-nav-item" style={{ color: props.color }}>About</Link></li>
                    {/* <li><Link to="/match" className="nav-item mobile-nav-item" style={{ color: props.color }}>Match</Link></li> */}
                    <li><Link to="/search" className="nav-item mobile-nav-item" style={{ color: props.color }}>Search</Link></li>
                    <li><Link to="/donate" className="nav-item mobile-nav-item" style={{ color: props.color }}>Shelters & Rescues</Link></li>
                    <li><Link to="/saved" className={`nav-item mobile-nav-item ${props.hoverColor}`} style={{ color: props.color }}>Saved</Link></li>
                    <li><a uk-toggle="target: #contact-canvas" className="nav-item mobile-nav-item" style={{ color: props.color }}>Contact</a></li>
                </ul>
            </div>
        </div>
    )
};

export default MobileMenu;