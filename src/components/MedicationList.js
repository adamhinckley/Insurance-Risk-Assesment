import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Autocomplete from "./AutoComplete";

export default class MedicationList extends Component {
  constructor() {
    super();
    this.state = {
      product: "",
      medication: "",
      message: ""
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getMedicationResult = e => {
    e.preventDefault();
    const { product, medication } = this.state;
    axios
      .post("https://insurance-risk-assesment.herokuapp.com/api/meds/", { plan: product, med: medication })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="med-list">
        <div className="back-button-container">
          <Link to="/">
            <button className="back-button">back</button>
          </Link>
        </div>
        <form className="input-container" onSubmit={this.getMedicationResult}>
          <label htmlFor="Product" />
          <select name="product" value={this.state.product} className="input" onChange={this.changeHandler}>
            <option value="" className="medication-select">
              Choose Product
            </option>
            <option value="PlanRight" className="medication-select">
              PlanRight
            </option>
            <option value="Transameirica" className="medication-select">
              Transamerica Solutions
            </option>
            />
          </select>
          <Autocomplete
            suggestions={[
              "Alligator",
              "Bask",
              "Crocodilian",
              "Death Roll",
              "Eggs",
              "Jaws",
              "Reptile",
              "Solitary",
              "Tail",
              "Wetlands"
            ]}
            value={this.state.medication}
            className="input"
            placeholder="Medication"
            onChange={this.changeHandler}
            name="medication"
          >
            <input type="text" />
          </Autocomplete>

          <button>Check Medication</button>
        </form>
      </div>
    );
  }
}
