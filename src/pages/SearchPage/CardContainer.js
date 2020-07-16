import React from "react";
import Card from "./Card";
require("dotenv");

const style = {
    container: {
        width: "85%",
        margin: "100px auto 100px auto"
    }
};

function CardContainer(props) {
    return (
        <div style={style.container}>
            <div className="uk-child-width-1-3@m uk-child-width-1-2@s uk-grid-match" uk-grid="true">
                {
                    props.dogs.map(el => {
                        if (el.photos[0] !== undefined) {
                            return <Card
                                name={el.name}
                                age={el.age}
                                breed={el.breeds.primary}
                                gender={el.gender}
                                location={el.contact.address.city + ", " + el.contact.address.state}
                                pic={el.photos[0].large}
                                key={props.dogs.id}
                                id={props.dogs.id}
                            />
                        }
                    })
                }
            </div>
        </div>
    );
};

export default CardContainer;