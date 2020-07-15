/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useLocation } from "react-router-dom";

const style = {
    navbar: {
        background: "none",
        zIndex: "980"
    },

    white: {
        color: "black",
        fontWeight: 100
    }
};

function Navbar() {
    // const location = useLocation();

    return (
        <nav className="uk-navbar-container uk-navbar" style={style.navbar} uk-sticky="bottom: #offset">
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav uk-visible@m">
                    <li><Link to="/" className="nav-item" style={style.white}>Home</Link></li>
                    <li><a href="" className="nav-item" style={style.white}>About</a></li>
                    <li><Link to="/match" className="nav-item" style={style.white}>Match</Link></li>
                    <li><Link to="/search" className="nav-item" style={style.white}>Search</Link></li>
                    <li><Link to="/donate" className="nav-item" style={style.white}>Donate</Link></li>
                    <li><a href="" className="nav-item" style={style.white}>Contact</a></li>
                </ul>
                <a className="uk-hidden@m" href="#menu-canvas" uk-toggle="true"><span className="menu-icon"
                    uk-icon="icon: menu; ratio: 1.5"></span></a>
            </div>
        </nav>
    )
};

export default Navbar;