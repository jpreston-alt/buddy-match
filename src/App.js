import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style.css";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import MatchPage from "./pages/MatchPage";
import DonatePage from "./pages/DonatePage";
import Footer from "./components/Footer";

function App() {
  return (

    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/match" component={MatchPage} />
      <Route exact path="/search" component={SearchPage} />
      <Route exact path="/donate" component={DonatePage} />
      <Footer />
    </Router>
  );
}

export default App;
