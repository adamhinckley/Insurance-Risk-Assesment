import React from "react";
import BuildChart from "./components/BuildChart";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <BuildChart />
      </div>
    );
  }
}

export default App;
