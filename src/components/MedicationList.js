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
  render() {
    return (
      <div className="build-chart">
        <div className="back-button-container">
          <Link to="/">
            <button className="back-button">back</button>
          </Link>
        </div>
        <form>
          <label htmlFor="Product" />
          <select name="product" value={this.state.product}>
            <option value="PlanRight" className="medication-select">
              PlanRight
            </option>
            />
          </select>
          <input
            type="text"
            name="medication"
            placeholder="medication"
            value={this.state.medication}
            className="medication-select"
          />
        </form>
      </div>
    );
  }
}
