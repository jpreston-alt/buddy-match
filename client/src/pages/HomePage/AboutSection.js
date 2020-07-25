import React from "react";
import "./style.css"

const styles = {
    container: {
        // paddingTop: 100,
        // paddingBottom: 100,
        // maxWidth: 900
        padding: "10%",
        maxWidth: 900
    },

    header: {
        color: "#2c3e50"
    }
}

function AboutSection() {
    return (
        <div className="uk-container uk-text-justify" style={styles.container}>
            <div className="uk-text-center">
                <h1 style={styles.header}>About</h1>
                <hr className="about-hr" />
            </div>
            <p>
                Welcome to Buddy Match! Buddy Match is an dog adoption application that helps you find your four-legged soul mate. Navigate to the search page to search for buddies by location, breed, or age. Save your favorites to a list to come back to later. To find local shelters and organizations, navigate to the Shelters & Rescues page.
                <br /><br />
                Buddy Match was built using The Petfinder API, and is my first attempt at a full MERN stack application (MongoDB, Express, React, and Node). This application is a work in progress. Currently, when a user saves a dog they save it to a MongoDB database that is shared by all users. So when they view favorited dogs they are viewing ALL the favorited dogs from the database. I plan on adding user authentication so the user can save their favorites to a personalized list. Check back soon for this improvement and more!
            </p>
        </div>
    )
};

export default AboutSection;