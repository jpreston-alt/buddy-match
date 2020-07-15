import React from "react";

const style = {
    subtitle: {
        lineHeight: "10px",
        fontSize: "14px"
    }
}

class Card extends React.Component {
    render() {
        return (
            <div className="uk-text-center">
                <div className="uk-card uk-card-default">
                    <div className="uk-card-media-top">
                        <img src={this.props.pic} alt="" />
                    </div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">
                            {this.props.name}
                        </h3>
                        <p style={style.subtitle}>
                            {this.props.age} &nbsp;-&nbsp; {this.props.breed}
                        </p>
                        {/* <p style={style.subtitle}>
                            {this.props.gender}
                        </p> */}
                        <p style={style.subtitle}>
                            {this.props.location}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
};

export default Card;