import React from "react";
import CardContainer from "./CardContainer";
import Cover from "./Cover";
import API from "../../utils/API";

class SearchPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dogs: []
        };
    }

    componentDidMount() {
        API.getAll()
            .then(res => {
                this.setState({ dogs: res.data.animals });
                console.log(this.state);
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <Cover />
                <CardContainer dogs={this.state.dogs} />
            </div>
        )
    }
};

export default SearchPage;