/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const style = {
    navbar: {
        backgroundColor: "transparent"
    },
};

function Navbar(props) {

    return (
        <div>
            <nav className="uk-navbar-container uk-navbar navbar" style={style.navbar}>
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav uk-visible@m">
                        <li><Link to="/" className={`nav-item ${props.hoverColor}`} style={{ color: props.color }}>About</Link></li>
                        <li><Link to="/match" className={`nav-item ${props.hoverColor}`} style={{ color: props.color }}>Match</Link></li>
                        <li><Link to="/search" className={`nav-item ${props.hoverColor}`} style={{ color: props.color }}>Search</Link></li>
                        <li><Link to="/donate" className={`nav-item ${props.hoverColor}`} style={{ color: props.color }}>Shelters & Rescues</Link></li>
                        <li><a uk-toggle="target: #contact-canvas" className={`nav-item ${props.hoverColor}`} style={{ color: props.color }}>Contact</a></li>
                    </ul>
                    <a className="uk-hidden@m" href="#menu-canvas" uk-toggle="target: #menu-canvas"><span className="menu-icon"
                        uk-icon="icon: menu; ratio: 1.5"></span></a>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;