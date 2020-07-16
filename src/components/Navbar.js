/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { tsPropertySignature } from "@babel/types";

const style = {
    navbar: {
        background: "none",
    },
};

function Navbar(props) {

    return (
        <nav className="uk-navbar-container uk-navbar" style={style.navbar}>
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav uk-visible@m">
                    <li><Link to="/" className="nav-item" style={{ color: props.color }}>Home</Link></li>
                    <li><a href="" className="nav-item" style={{ color: props.color }}>About</a></li>
                    <li><Link to="/match" className="nav-item" style={{ color: props.color }}>Match</Link></li>
                    <li><Link to="/search" className="nav-item" style={{ color: props.color }}>Search</Link></li>
                    <li><Link to="/donate" className="nav-item" style={{ color: props.color }}>Donate</Link></li>
                    <li><a href="" className="nav-item" style={{ color: props.color }}>Contact</a></li>
                </ul>
                <a className="uk-hidden@m" href="#menu-canvas" uk-toggle="true"><span className="menu-icon"
                    uk-icon="icon: menu; ratio: 1.5"></span></a>
            </div>
        </nav>
    )
};

export default Navbar;