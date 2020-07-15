import React from "react";
import Card from "./Card";
import API from "../utils/API";
require("dotenv");

const style = {
    container: {
        width: "85%",
        margin: "100px auto 100px auto"
    }
};

const data = [
    {
        name: "Bug",
        age: "Adult",
        breed: "Chiuhuahua",
        gender: "Male",
        location: "Seattle, WA"
    },
    {
        name: "Macie",
        age: "Puppy",
        breed: "Chiuhuahua",
        gender: "Female",
        location: "Safety Harbor, FL"
    },
    {
        name: "Bear",
        age: "Adult",
        breed: "Chiuhuahua",
        gender: "Male",
        location: "Waynesville, MO"
    },
    {
        name: "Bug",
        age: "Adult",
        breed: "Chiuhuahua",
        gender: "Male",
        location: "Seattle, WA"
    },
    {
        name: "Macie",
        age: "Puppy",
        breed: "Chiuhuahua",
        gender: "Female",
        location: "Safety Harbor, FL"
    },
    {
        name: "Bear",
        age: "Adult",
        breed: "Chiuhuahua",
        gender: "Male",
        location: "Waynesville, MO"
    },

]

class CardContainer extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         error: null,
    //         isLoaded: false,
    //         dogs: []
    //     };
    // }

    componentDidMount() {
        API.getAll().then(res => console.log(res));
    };
    // componentDidMount() {
    //     fetch("https://api.petfinder.com/v2/animals?type=dog&page=2", {
    //         method: "GET",
    //     })
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 console.log(result);
    //                 this.setState({
    //                     isLoaded: true,
    //                     dogs: result.animals
    //                 });
    //             },
    //             (error) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     error
    //                 });
    //             }
    //         )
    // }

    // render() {
    //     const { error, isLoaded, dogs } = this.state;
    //     if (error) {
    //         return <div>Error: {error.message}</div>;
    //     } else if (!isLoaded) {
    //         return <div>Loading...</div>;
    //     } else {
    //         return (
    //             <div style={style.container}>
    //                 <div className="uk-child-width-1-3@m uk-grid-match" uk-grid="true">
    //                     {
    //                         dogs.map(el => {
    //                             let url;
    //                             if (el.photos[0] !== undefined) {
    //                                 url = el.photos[0].large;
    //                             } else {
    //                                 url = "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081";
    //                             }

    //                             return <Card
    //                                 name={el.name}
    //                                 age={el.age}
    //                                 breed={el.breeds.primary}
    //                                 gender={el.gender}
    //                                 location={el.contact.address.city + ", " + el.contact.address.state}
    //                                 pic={url}
    //                             />
    //                         })
    //                     }
    //                 </div>
    //             </div>
    //         );
    //     }
    // }

    render() {
        return (
            <div style={style.container}>
                <div className="uk-child-width-1-3@m uk-grid-match" uk-grid="true">
                    {
                        data.map(el => {
                            return <Card
                                name={el.name}
                                age={el.age}
                                breed={el.breed}
                                gender={el.gender}
                                location={el.location}
                                pic={"https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"}
                            />
                        })
                    }
                </div>
            </div>
        );
    }
};

export default CardContainer;