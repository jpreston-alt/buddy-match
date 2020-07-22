import React from "react";
import CardContainer from "./CardContainer";
import Cover from "../../components/Cover";
import API from "../../utils/API";
import SearchForm from "../SearchPage/SearchForm/index";
import TokenContext from "../../utils/TokenContext";

class SearchPage extends React.Component {
    static contextType = TokenContext;

    constructor(props) {
        super(props)
        this.state = {
            dogs: [],
        };
    };

    componentDidMount() {
        const token = this.context;

        API.getAll(token)
            .then(res => {
                this.setState({ dogs: res.data.animals });
            })
            .catch(err => console.log(err));
    };

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