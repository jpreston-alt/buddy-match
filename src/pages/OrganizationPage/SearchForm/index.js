import React from "react";
import "./style.css"

function SearchForm() {
    return (
        <div className="uk-container">
            <form>
                <div className="uk-margin">
                    <label className="uk-form-label">Search By Location</label>
                    <div className="uk-form-controls">
                        <input className="uk-input organization-input" id="form-stacked-text" type="text" placeholder="ex. 'Seattle'" />
                        <button className="org-search-btn">
                            <span uk-icon="icon: search; ratio: 1.5"></span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default SearchForm;