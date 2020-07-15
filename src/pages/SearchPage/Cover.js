import React from "react";
import Navbar from "../../components/Navbar"

const style = {
    img: {
        width: "100%",
        textAlign: "center"
    },

    overlay: {
        backgroundColor: "rgba(102, 227, 152, 0.92)"
    },

    header: {
        color: "white",
        fontSize: "300%",
        marginTop: "100px"
    },

    box: {
        height: "100px",
        width: "85%",
        backgroundColor: "#90EFB6",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "20px",
    },

    hr: {
        width: "5%",
        margin: "auto",
        marginTop: "80px",
        marginBottom: "80px",
        backgroundColor: "white",
        height: "1px",
        border: "none"
    }

};

class Cover extends React.Component {
    render() {
        return (
            <div className="uk-cover-container">
                <div className="uk-inline" style={style.img}>
                    <img style={style.img} src="./images/lake.jpg" alt="" />
                    <div className="uk-overlay-default uk-position-cover" style={style.overlay}>
                        <Navbar />
                    </div>
                    <div className="uk-overlay uk-position-center" style={style.img}>
                        <h1 style={style.header}>Find Your Perfect Buddy</h1>
                        <hr style={style.hr} />
                        <div style={style.box}></div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Cover;