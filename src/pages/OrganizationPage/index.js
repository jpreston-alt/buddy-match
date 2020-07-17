import React from "react";
import API from "../../utils/API";
import Cover from "../../components/Cover";
import SearchForm from "./SearchForm";
import Table from "./Table";

class OrganizationPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            organizations: []
        };
    }

    componentDidMount() {
        API.getOrganizations()
            .then(res => {
                this.setState({ organizations: res.data.organizations });
                console.log(this.state);
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <Cover
                    header="Find Shelters and Rescues"
                    searchForm={<SearchForm />}
                />
                <div className="uk-container" style={{ margin: 75 }}>
                    <Table organizations={this.state.organizations} />
                </div>
            </div>
        )
    }
};

export default OrganizationPage;