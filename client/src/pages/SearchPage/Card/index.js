import React from "react";
import "./card.css";

class Card extends React.Component {
    render() {
        return (
            <div className="uk-text-center">
                <div className="uk-card uk-card-default">
                    <div className="uk-card-media-top uk-cover-container">
                        <img src={this.props.pic} alt="" uk-cover="true" />
                        <canvas width="300" height="400"></canvas>
                        <div className="uk-overlay uk-light uk-position-bottom btn-overlay">
                            <div className="uk-grid uk-child-width-expand" uk-grid="true">
                                <div>
                                    <button className="icon-btn left-btn"><span uk-icon="icon: info; ratio: 1.25"></span></button>
                                </div>
                                <div>
                                    <button className="icon-btn right-btn"><span uk-icon="icon: heart; ratio: 1.25"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">
                            {this.props.name}
                        </h3>
                        <hr />
                        <p className="subtitle">
                            {this.props.age} &nbsp;-&nbsp; {this.props.breed}
                        </p>
                        <p className="subtitle">
                            {this.props.location}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
};

export default Card;