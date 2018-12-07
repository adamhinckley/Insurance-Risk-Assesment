import React from "react";

class BuildChart extends React.Component {
  constructor() {
    super();
    this.state = {
      height: "",
      weight: undefined,
      message: ""
    };
  }
  changeHandler = e => {
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
    const { weight, height, message } = this.state;

    return (
      <div>
        <div>
          <label>Weight</label>
          <input name="weight" value={weight} onChange={this.changeHandler} type="number" pattern="\d*" />
        </div>
        <div>
          <label>Height</label>
          <select name="height" value={height} onChange={this.changeHandler} className="custom-select" required>
            <option value="">Height</option>
            <option value="56">4'8</option>
            <option value="57">4'9</option>
            <option value="58">4'10</option>
            <option value="59">4'11</option>
            <option value="60">5'0</option>
            <option value="61">5'1</option>
            <option value="62">5'2</option>
            <option value="63">5'3</option>
            <option value="64">5'4</option>
            <option value="65">5'5</option>
            <option value="66">5'6</option>
            <option value="67">5'7</option>
            <option value="68">5'8</option>
            <option value="69">5'9</option>
            <option value="70">5'10</option>
            <option value="71">5'11</option>
            <option value="72">6'0</option>
            <option value="73">6'1</option>
            <option value="74">6'2</option>
            <option value="75">6'3</option>
            <option value="76">6'4</option>
            <option value="77">6'5</option>
            <option value="78">6'6</option>
            <option value="79">6'7</option>
            <option value="80">6'8</option>
            <option value="81">6'9</option>
            <option value="82">6'10</option>
          </select>
        </div>
        <div>
          <button onClick={this.buildChecker}>Check Build</button>
        </div>
        <div>
          <p>{message}</p>
        </div>
      </div>
    );
  }
}

export default BuildChart;
