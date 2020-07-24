import React, { useEffect, useState, useContext } from "react";
import "./style.css";
import Card from "../../components/Card";
import Cover from "../../components/Cover";
import FavApi from "../../utils/FavApi";
import DogProfile from "../../components/DogProfile";

function SavedPage(props) {
    const [dogState, setDogState] = useState([]);
    const [currentDog, setCurrentDog] = useState({});

    useEffect(() => {
        FavApi.getAll()
            .then(res => {
                setDogState(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    const handleInfoClick = (id) => {
        let dog = dogState.filter(el => el.id === id);
        setCurrentDog(dog[0]);
    };

    return (
        <div>
            <Cover header={"Your Saved Buddies"} />
            {
                dogState.length !== 0 ? (
                    <div className="saved-container">
                        <div className="uk-child-width-1-3@m uk-child-width-1-2@s uk-grid-match" uk-grid="true" uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 250; repeat: false">
                            {
                                dogState.map(el => {
                                    return <Card
                                        name={el.name}
                                        age={el.age}
                                        breed={el.breed}
                                        gender={el.gender}
                                        location={el.location}
                                        pic={el.photo}
                                        key={el.id}
                                        id={el.id}
                                        handleInfoClick={handleInfoClick}
                                    />
                                })
                            }
                        </div>
                    </div>
                ) : (
                        <div className="uk-text-center">
                            <h5 style={{ margin: "100px auto 100px auto" }}>You have no saved buddies. Find some buddies on the search page!</h5>
                        </div>
                    )
            }
            <DogProfile dog={currentDog} />
        </div>
    )

};

export default SavedPage;
