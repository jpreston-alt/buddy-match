import React from "react";
import Navbar from "../../components/Navbar";
import "./style.css"

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div style={{ height: 700 }}>
                    <h1>HomePage</h1>
                </div>
                <div style={{ height: 700 }}></div>
            </div>
        )
    }
};

export default HomePage;