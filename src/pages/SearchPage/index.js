import React from "react";
import CardContainer from "./CardContainer";
import Cover from "../../components/Cover";
import API from "../../utils/API";
import SearchForm from "../SearchPage/SearchForm/index";

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
                <Cover
                    header="Find Your Perfect Buddy"
                    searchForm={<SearchForm />}
                />
                <CardContainer dogs={this.state.dogs} />
            </div>
        )
    }
};

export default SearchPage;