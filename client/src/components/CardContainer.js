import React from "react";
import Card from "./Card/index";

const style = {
    container: {
        width: "85%",
        margin: "100px auto 100px auto",
    }
};

function CardContainer(props) {
    return (
        <div style={style.container}>
            <div className="uk-child-width-1-3@m uk-child-width-1-2@s uk-grid-match" uk-grid="true" uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 250; repeat: false">
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
                                key={el.id}
                                id={el.id}
                                handleInfoClick={props.handleInfoClick}
                                icon="icon: heart; ratio: 1.25"
                                page="search"
                            />
                        }
                        return;
                    })
                }
            </div>
        </div>
    );
};

export default CardContainer;