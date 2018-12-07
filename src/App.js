import React from "react";
import BuildChart from "./components/BuildChart";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      weight: null,
      message: ""
    };
  }

  changeHandler = e => {
    console.log("trying to change input", e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  buildChecker = e => {
    e.preventDefault();
    const { height, weight } = this.state;
    if (height == 56 && weight <= 185) {
      this.setState({ message: "Height & Weight is ok" });
    } else if (height == 57 && weight <= 193) {
      this.setState({ message: "Height & Weight is ok" });
    } else {
      this.setState({ message: "only apply Transamerica 45-85 or guarntee issue" });
    }
  };

  render() {
    return (
      <div>
        <BuildChart
          height={this.state.height}
          weight={this.state.weight}
          message={this.state.message}
          onChange={this.changeHandler}
          buildChecker={this.buildChecker}
        />
      </div>
    );
  }
}

export default App;
