import React, { useState, useEffect, useContext } from "react";
import CardContainer from "./CardContainer";
import Cover from "../../components/Cover";
import API from "../../utils/API";
import SearchForm from "../SearchPage/SearchForm/index";
import TokenContext from "../../utils/TokenContext";

function SearchPage() {
    const token = useContext(TokenContext);
    const [dogState, setDogState] = useState([]);
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
        API.searchDogs(token, searchObj.location, searchObj.breed, searchObj.age)
            .then(res => setDogState(res.data.animals))
            .catch(err => console.log(err));
    };

    const handleInputChange = (event) => {
        setSearchObj({ ...searchObj, [event.target.name]: event.target.value })
    };

    return (
        <div>
            <Cover
                header="Find Your Perfect Buddy"
                searchForm={<SearchForm
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
                />}
            />
            <CardContainer dogs={dogState} />
        </div>
    )
};

export default SearchPage;