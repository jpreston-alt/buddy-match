import React, { useEffect, useState, useContext } from "react";
import "./style.css";
import CardContainer from "../../components/CardContainer";
import Cover from "../../components/Cover";

function SavedPage() {
    const [dogState, setDogState] = useState([]);

    useEffect(() => {
        let favorites = JSON.parse(localStorage.getItem("favorites"));
        // setDogState(favorites);
    }, []);

    return (
        <div>
            <Cover header={"Your Saved Buddies"} />
            <CardContainer dogs={dogState} />
        </div>
    )

};

export default SavedPage;
