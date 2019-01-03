import React from "react";
import BuildChart from "./components/BuildChart";
import Home from "./components/Home";
import { Route, NavLink } from "react-router-dom";
import MedicationList from "./components/MedicationList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  loginHandler = async e => {
    e.preventDefault();
    localStorage.getItem("jwt") ? await this.setState({ loggedIn: true }) : alert("you need to login");
  };

  render() {
    return (
      <div className="app">
        {/* <nav>
          <NavLink to="/" className="navLink">
            Home |
          </NavLink>
          &nbsp;
          <NavLink to="/check-build" className="navLink">
            Check Build |
          </NavLink>
          &nbsp;
          <NavLink to="/med-list" className="navLink">
            Med List
          </NavLink>
        </nav> */}
        <section>
          <Route exact path="/" render={ownProps => <Home {...ownProps} />} />
          <Route exact path="/check-build" render={ownProps => <BuildChart {...ownProps} />} />
          <Route exact path="/med-list" render={ownProps => <MedicationList {...ownProps} />} />
        </section>
      </div>
    );
  }
}

export default App;
