import React from "react";
import BuildChart from "./components/BuildChart";
import { Route, NavLink } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/check-build">Check Build</NavLink>
        </nav>
        <section>
          <Route exact path="/check-build" render={ownProps => <BuildChart {...ownProps} />} />
        </section>
      </div>
    );
  }
}

export default App;
