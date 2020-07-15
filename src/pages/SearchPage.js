import React from "react";
import CardContainer from "../components/CardContainer";
import Cover from "../components/Cover";

class SearchPage extends React.Component {
    render() {
        return (
            <div>
                <Cover />
                <CardContainer />
            </div>
        )
    }
};

export default SearchPage;