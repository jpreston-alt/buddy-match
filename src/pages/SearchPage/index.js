import React from "react";
import CardContainer from "./CardContainer";
import Cover from "./Cover";

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