import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MedicationList extends Component {
  constructor() {
    super();
    this.state = {
      // carrier: '',
      product: "",
      medication: "",
      message: ""
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="med-list">
        <div className="back-button-container">
          <Link to="/">
            <button className="back-button">back</button>
          </Link>
        </div>
        <form className="input-container">
          <label htmlFor="Product" />
          <select name="product" value={this.state.product} className="input">
            <option value="PlanRight" className="medication-select">
              PlanRight
            </option>
            />
          </select>
          <input
            type="text"
            name="medication"
            placeholder="Medication"
            value={this.state.medication}
            className="input"
            onChange={this.changeHandler}
          />
          <button>Check Medication</button>
        </form>
      </div>
    );
  }
}
