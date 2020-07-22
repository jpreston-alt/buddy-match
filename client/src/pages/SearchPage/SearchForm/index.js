import React from "react";
import "./style.css"

function SearchForm(props) {
    return (
        <div className="uk-container">
            <form className="uk-grid-small uk-margin" uk-grid="true" onSubmit={props.handleSubmit}>
                <div className="uk-width-1-3">
                    <label className="uk-form-label">Location</label>
                    <div className="uk-form-controls">
                        <input
                            className="uk-input" id="form-stacked-text" type="text"
                            placeholder="ex. 'Seattle'"
                            name="location"
                            onChange={props.handleInputChange}
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
                            onChange={props.handleInputChange}
                        />
                    </div>
                </div>
                <div className="uk-width-1-3">
                    <label className="uk-form-label">Age</label>
                    <div className="uk-form-controls">
                        <select className="uk-select" id="form-horizontal-select" name="age" onChange={props.handleInputChange}>
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