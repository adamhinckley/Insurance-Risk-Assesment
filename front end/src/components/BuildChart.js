import React from "react";
import axios from "axios";

const api = "";
class BuildChart extends React.Component {
  constructor() {
    super();
    this.state = {
      height: undefined,
      weight: "",
      message: "",
      products: [],
      gender: "",
      age: ""
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getResults = e => {
    e.preventDefault();
    const { height, weight } = this.state;
    axios.get(`${api}`, { height, weight });
  };

  render() {
    const { weight, height, age, message } = this.state;

    return (
      <div className="buildChart">
        <div>
          <label>Weight</label>
          <input name="weight" value={weight} onChange={this.changeHandler} type="number" pattern="\d*" />
        </div>
        <div>
          <label>Height</label>
          <select name="height" value={height} onChange={this.changeHandler} className="custom-select" required>
            <option value="">Height</option>
            <option value={56}>4'8</option>
            <option value={57}>4'9</option>
            <option value={58}>4'10</option>
            <option value={59}>4'11</option>
            <option value={60}>5'0</option>
            <option value={61}>5'1</option>
            <option value={62}>5'2</option>
            <option value={63}>5'3</option>
            <option value={64}>5'4</option>
            <option value={65}>5'5</option>
            <option value={66}>5'6</option>
            <option value={67}>5'7</option>
            <option value={68}>5'8</option>
            <option value={69}>5'9</option>
            <option value={70}>5'10</option>
            <option value={71}>5'11</option>
            <option value={72}>6'0</option>
            <option value={73}>6'1</option>
            <option value={74}>6'2</option>
            <option value={75}>6'3</option>
            <option value={76}>6'4</option>
            <option value={77}>6'5</option>
            <option value={78}>6'6</option>
            <option value={79}>6'7</option>
            <option value={80}>6'8</option>
            <option value={81}>6'9</option>
            <option value={82}>6'10</option>
          </select>
        </div>

        {/* //radio buttons for gender */}
        <div>
          <label>Male</label>
          <input
            type="radio"
            value="Male"
            name="gender"
            checked={this.state.gender === "male"}
            onChange={this.changeHandler}
          />
          <label htmlFor="label">Female</label>
          <input
            type="radio"
            value="Female"
            name="gender"
            checked={this.state.gender === "female"}
            onChange={this.changeHandler}
          />
        </div>
        <div>
          <label>Age</label>
          <input name="age" value={age} onChange={this.changeHandler} type="number" pattern="\d*" />
        </div>

        <div>
          <button onClick={this.buildChecker}>Check Build</button>
        </div>
        <div>
          <p>{message}</p>

          {this.state.products.map(p => {
            return (
              <p>
                {p.carrier} &nbsp;
                {p.product}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BuildChart;
