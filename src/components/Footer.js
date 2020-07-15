/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const style = {
    icon: {
        padding: "10px 3px 3px 3px"
    },

    footer: {
        backgroundColor: "rgba(102, 227, 152, 0.92)",
        color: "white",
        padding: "15px",
        fontWeight: "100"
    }
};

class Footer extends React.Component {
    render() {
        return (
            <footer className="uk-text-center uk-text-middle footer" style={style.footer}>
                <span> © Joanna Preston</span> <br />
                <a uk-icon="icon: github" href="https://github.com/jpreston-alt" className="contact-icon contact-link-icon" target="_blank" style={style.icon}></a>
                <a uk-icon="icon: mail" className="contact-icon contact-link-icon" href="mailto:joannappreston@gmail.com" style={style.icon}></a>
                <a uk-icon="icon: linkedin" href="https://www.linkedin.com/in/joanna-preston/" target="_blank" className="contact-icon contact-link-icon" style={style.icon}></a>
            </footer>
        )
    }
};

export default Footer;