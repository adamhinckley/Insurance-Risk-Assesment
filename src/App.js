import React from "react";
import BuildChart from "./components/BuildChart";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import MedicationList from "./components/MedicationList";
import Login from "./components/Login";
import Register from "./components/Register";

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

  render()  {
    return !this.state.loggedIn ? (
      <div className="app">
        <Switch>
          <Route  path="/register" render={ownProps => <Register {...ownProps} />} />
          <Route  path="/login" render={ownProps => <Login {...ownProps} loginHandler={this.loginHandler} />} />
        </Switch>
        ):(
        <Switch>
          <Route exact path="/" render={ownProps => <Home {...ownProps} />} />
          <Route  path="/check-build" render={ownProps => <BuildChart {...ownProps} />} />
          <Route  path="/med-list" render={ownProps => <MedicationList {...ownProps} />} />
        </Switch>
      </div>
    )
  }
}

export default App;
