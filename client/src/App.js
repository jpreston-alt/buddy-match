import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import NoMatch from "./components/NoMatch";
import SavedPage from "./pages/SavedPage";

function App() {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

  useEffect(() => {
    let getToken = JSON.parse(localStorage.getItem("token"));


    if (getToken !== null) {
      setToken(getToken);
      let currentTime = new Date().getTime();

      if (!token.expires || token.expires - currentTime < 1) {
        getApiToken();
      } else {
        console.log(`expires in: ${(token.expires - currentTime) / 60000} mins`);
      }

    } else {
      getApiToken();
    }
  }, []);

  const getApiToken = () => {
    ApiToken.getToken()
      .then(function (res) {

        console.log("new token generated");

        let newToken = {
          token: res.access_token,
          expires: new Date().getTime() + (res.expires_in * 1000),
          type: res.token_type
        };

        localStorage.setItem("token", JSON.stringify(newToken));
        setToken(newToken);

      }).catch(err => console.log(`token error: ${err}`))
  }

  return (
    token !== null ? (
      (
        <TokenContext.Provider value={token.token}>
          < Router >
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/match" component={MatchPage} />
              <Route exact path="/search" component={SearchPage} />
              <Route exact path="/donate" component={OrganizationPage} />
              <Route exact path="/saved" component={SavedPage} />
              <Route component={NoMatch} />
            </Switch>
            <ContactCanvas />
            <MobileMenu />
            <Footer />
          </Router >
        </TokenContext.Provider>
      )
    ) : (
        <div className="uk-text-center">
          <h5 style={{ margin: "100px auto 100px auto" }}>Loading...</h5>
        </div>
      )
  )
}

export default App;
