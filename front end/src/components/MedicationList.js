import React, { Component } from "react";

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
      <div>
        <h2>Medication Check</h2>
        <form>
          <label htmlFor="Product" />
          <select name="product" value={this.state.product}>
            <option value="PlanRight">PlanRight</option>/>
          </select>
          <input type="text" name="medication" placeholder="medication" value={this.state.medication} />
        </form>
      </div>
    );
  }
}
