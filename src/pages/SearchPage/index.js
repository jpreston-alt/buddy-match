import React from "react";
import CardContainer from "./CardContainer";
import Cover from "../../components/Cover";
import API from "../../utils/API";
import SearchForm from "../SearchPage/SearchForm/index";
import ApiToken from "../../utils/ApiToken";

class SearchPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dogs: [],
            token: JSON.parse(localStorage.getItem("token"))
        };
    }

    componentDidMount() {
        API.getAll(this.state.token.token)
            .then(res => {
                this.setState({ dogs: res.data.animals });
                console.log(this.state);
            })
            .catch(err => console.log(err));

        this.setState({ token: JSON.parse(localStorage.getItem("token")) });
        let currentTime = new Date().getTime();

        console.log(`expires in: ${(this.state.token.expires - currentTime) / 60000} mins`);

        if (!this.state.token.expires || this.state.token.expires - currentTime < 1) {
            this.getApiToken();
        }

    }

    getApiToken() {
        ApiToken.getToken()
            .then(function (res) {

                console.log("new token generated :)");

                let token = {
                    token: res.data.access_token,
                    expires: new Date().getTime() + (res.data.expires_in * 1000),
                    type: res.data.token_type
                };

                localStorage.setItem("token", JSON.stringify(token));

            }).catch(err => console.log(`token error: ${err}`))
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