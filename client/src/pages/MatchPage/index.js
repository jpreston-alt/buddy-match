import React from "react";
import Navbar from "../../components/Navbar";
import "./style.css";

class MatchPage extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="uk-container uk-text-center quiz-container">
                    <h2 className="quiz-heading">Buddy Match Quiz Coming Soon <span uk-icon="happy"></span></h2>
                </div>
            </div>
        )
    }
};

export default MatchPage;