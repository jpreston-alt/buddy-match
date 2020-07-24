import React from "react";
import "./style.css"

function SearchForm(props) {
    return (
        <div className="uk-container" onSubmit={props.handleSubmit}>
            <form>
                <div className="uk-margin">
                    <label className="uk-form-label">Search By Location</label>
                    <div className="uk-form-controls">
                        <input className="uk-input organization-input" id="form-stacked-text" type="text" placeholder="ex. '98199'"
                            onChange={props.handleInputChange}
                            value={props.searchState}
                        />
                        <button className="org-search-btn" type="submit">
                            <span uk-icon="icon: search; ratio: 1"></span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default SearchForm;