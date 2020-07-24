import React, { useState, useContext, useEffect } from "react";
import "./style.css"
import API from "../../../utils/API";
import TokenContext from "../../../utils/TokenContext";

function SearchForm(props) {
    const token = useContext(TokenContext);
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        getBreedsList();
    }, []);

    const getBreedsList = () => {
        API.getBreeds(token)
            .then(res => setBreeds(res.data))
            .catch(err => console.log(err));
    };

    return (
        <div className="uk-container">
            <form className="uk-grid-small uk-margin" uk-grid="true" onSubmit={props.handleSubmit}>
                <div className="uk-width-1-3">
                    <label className="uk-form-label">Location</label>
                    <div className="uk-form-controls">
                        <input
                            className="uk-input" id="form-stacked-text" type="text"
                            placeholder="ex. '98199'"
                            name="location"
                            onChange={props.handleInputChange}
                            value={props.searchObj.location}
                        />
                    </div>
                </div>
                <div className="uk-width-1-3">
                    <label className="uk-form-label">Breed</label>
                    <div className="uk-form-controls">
                        <input
                            className="uk-input"
                            id="form-stacked-text"
                            type="text"
                            placeholder="ex. 'Chihuahua'"
                            name="breed"
                            list="breeds"
                            onChange={props.handleInputChange}
                            value={props.searchObj.breed}
                        />
                        <datalist id="breeds">
                            {
                                breeds.map(el => {
                                    return <option key={breeds.indexOf(el)} value={el.name} />
                                })
                            }
                        </datalist>
                    </div>
                </div>
                <div className="uk-width-1-3">
                    <label className="uk-form-label">Age</label>
                    <div className="uk-form-controls">
                        <select
                            className="uk-select"
                            id="form-horizontal-select"
                            name="age"
                            onChange={props.handleInputChange}
                            value={props.searchObj.age}
                        >
                            <option value="">Please select...</option>
                            <option value="baby">Baby</option>
                            <option value="young">Puppy</option>
                            <option value="adult">Adult</option>
                            <option value="senior">Senior</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="search-btn">Search<span uk-icon="icon: search; ratio: 1"></span></button>
            </form>
        </div>
    )
};

export default SearchForm;