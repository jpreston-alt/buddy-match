import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
        <div className="uk-container">
            <form className="uk-grid-small" uk-grid="true">
                <div className="uk-width-1-3 uk-margin">
                    <label className="uk-form-label">Location</label>
                    <div className="uk-form-controls">
                        <input className="uk-input" id="form-stacked-text" type="text" placeholder="ex. 'Seattle'" />
                    </div>
                </div>
                <div className="uk-width-1-3 uk-margin">
                    <label className="uk-form-label">Breed</label>
                    <div className="uk-form-controls">
                        <input className="uk-input" id="form-stacked-text" type="text" placeholder="ex. 'Chihuahua'" />
                    </div>
                </div>
                <div className="uk-width-1-3 uk-margin">
                    <label className="uk-form-label">Age</label>
                    <div className="uk-form-controls">
                        <select className="uk-select" id="form-horizontal-select">
                            <option value="">Please select...</option>
                            <option value="1">Puppy</option>
                            <option value="2">Adult</option>
                            <option value="3">Senior</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default SearchForm;