import React, { useState, useEffect, useContext } from "react";
import CardContainer from "../../components/CardContainer";
import Cover from "../../components/Cover";
import API from "../../utils/API";
import SearchForm from "../SearchPage/SearchForm/index";
import TokenContext from "../../utils/TokenContext";
import NoRes from "../../components/NoRes";
import FilterBtn from "../../components/FilterBtn";
import DogProfile from "../../components/DogProfile";

function SearchPage() {
    const token = useContext(TokenContext);
    const [dogState, setDogState] = useState([]);
    const [filters, setFilters] = useState([]);
    const [currentDog, setCurrentDog] = useState({
        dog: {},
        photo: ""
    });
    const [searchObj, setSearchObj] = useState({
        location: "",
        breed: "",
        age: ""
    });

    useEffect(() => {
        API.getAll(token)
            .then(res => {
                setDogState(res.data.animals);
            })
            .catch(err => console.log(err));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        setFilters([searchObj.location, searchObj.breed, searchObj.age]);
        API.searchDogs(token, searchObj.location, searchObj.breed, searchObj.age)
            .then(res => setDogState(res.data.animals))
            .catch(err => console.log(err));
        setSearchObj({
            location: "",
            breed: "",
            age: "",
        })
    };

    const handleInputChange = (event) => {
        setSearchObj({ ...searchObj, [event.target.name]: event.target.value })
    };

    const handleInfoClick = (id) => {
        API.getDog(token, id)
            .then(res => {
                setCurrentDog({
                    name: res.data.name,
                    photo: res.data.photos[0].large,
                    age: res.data.age,
                    email: res.data.contact.email,
                    phone: res.data.contact.phone,
                    gender: res.data.gender,
                    status: res.data.status,
                    environment: res.data.environment,
                    attributes: res.data.attributes,
                    breed: res.data.breeds.primary,
                    description: res.data.description,
                    location: `${res.data.contact.address.city}, ${res.data.contact.address.state}`,
                    href: res.data.url
                });
            })
            .catch(err => console.log(err))
    };

    return (
        <div>
            <Cover
                header="Find Your Perfect Buddy"
            />
            <div className="search-box uk-text-center">
                <SearchForm
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
                    searchObj={searchObj}
                />
            </div>
            {dogState.length !== 0 ?
                (<CardContainer dogs={dogState} handleInfoClick={handleInfoClick} />)
                :
                (<NoRes type={"a Buddy"} />)
            }
            <DogProfile dog={currentDog} />
        </div>
    )
};

export default SearchPage;