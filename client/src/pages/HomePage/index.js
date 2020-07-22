import React from "react";
import Navbar from "../../components/Navbar/index";
import AboutSection from "./AboutSection";
import "./style.css"

class HomePage extends React.Component {
    render() {
        return (
            <div id="home-pic" uk-parallax="bgy: -200">
                <div className="cover-div">
                    <Navbar />
                    <div className="uk-container">
                        <div className="title-div">
                            <h1 className="title">buddymatch.com</h1>
                            <h4 className="home-subtitle">Your Soul Mate Awaits</h4>
                        </div>
                    </div>
                </div>
                <div className="about-div" id="about">
                    <AboutSection />
                </div>
            </div>
        )
    }
};

export default HomePage;