import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style.css";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import MatchPage from "./pages/MatchPage";
import OrganizationPage from "./pages/OrganizationPage";
import Footer from "./components/Footer";
import ContactCanvas from "./components/ContactCanvas/index";
import TokenContext from "./utils/TokenContext";
import ApiToken from "./utils/ApiToken";
import MobileMenu from "./components/Navbar/MobileMenu";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      token: JSON.parse(localStorage.getItem("token"))
    };
  }

  componentDidMount() {
    this.setState({ token: JSON.parse(localStorage.getItem("token")) });
    let currentTime = new Date().getTime();

    console.log(`expires in: ${(this.state.token.expires - currentTime) / 60000} mins`);

    if (!this.state.token.expires || this.state.token.expires - currentTime < 1) {
      this.getApiToken();
    }
  };

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
      <TokenContext.Provider value={this.state.token.token}>
        < Router >
          <Route exact path="/" component={HomePage} />
          <Route exact path="/match" component={MatchPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/donate" component={OrganizationPage} />
          <ContactCanvas />
          <MobileMenu />
          <Footer />
        </Router >
      </TokenContext.Provider>
    );
  }
}

export default App;
