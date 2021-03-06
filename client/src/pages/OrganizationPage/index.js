import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import Cover from "../../components/Cover";
import SearchForm from "./SearchForm";
import Table from "./Table";
import TokenContext from "../../utils/TokenContext";
import NoRes from "../../components/NoRes";

function OrganizationPage() {
    const token = useContext(TokenContext);
    const [orgState, setOrgState] = useState([]);
    const [searchState, setSearchState] = useState("");

    useEffect(() => {
        let zip = JSON.parse(localStorage.getItem("lastZip"));
        searchByZip(zip || "98199");
    }, []);

    const searchByZip = (zip) => {
        localStorage.setItem("lastZip", JSON.stringify(zip));
        API.getOrgsByLocation(token, zip)
            .then(res => {
                setOrgState(res.data.organizations);
            })
            .catch(err => console.log(err));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        searchByZip(searchState);
        setSearchState("");
    };

    const handleInputChange = (event) => {
        setSearchState(event.target.value);
    };

    return (
        <div>
            <Cover
                header="Find Shelters and Rescues"
            />
            <div className="search-box uk-text-center">
                <SearchForm
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
                    searchState={searchState}
                />
            </div>
            <div className="uk-container" style={{ margin: 50 }}>
                {orgState.length !== 0 ?
                    (<Table organizations={orgState} />)
                    :
                    (<NoRes type={"an Organization"} />)
                }
            </div>
        </div>
    )
};

export default OrganizationPage;