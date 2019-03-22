import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import EligibleProducts from "./EligibleProducts"

const api = "https://insurance-risk-assesment.herokuapp.com"

const BuildChart = () => {
    const [state, setState] = useState([
        {
            height: null,
            weight: "",
            message: "",
            products: [],
            gender: "",
            age: "",
            maleChecked: false,
            femaleChecked: false,
            loading: false
        }
    ])

    const changeHandler = e => {
        setState({ [e.target.name]: e.target.value })
    }

    const getResults = e => {
        const [age, height, weight, gender] = state
        if (!age || !height || !weight || !gender) {
            setState({ message: "please complete the form" })
        } else {
            setState({ loading: true })
        }
        axios
            .post(`${api}/api/build`, { age, height, weight, gender })
            .then(res => {
                if (res.data.plans.length === 0) {
                    setState({
                        message: "Not eligible for any plans 🙁  ",
                        products: [],
                        loading: false
                    })
                } else {
                    setState({
                        message: "Eligible to apply for:",
                        products: res.data.plans,
                        loading: false
                    })
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const radioHandler = e => {
        !state.maleChecked
            ? setState({ maleChecked: true, femaleChecked: false, gender: "male" })
            : setState({ maleChecked: false, femaleChecked: true, gender: "female" })
    }

    return (
        <div className="buildChart">
            <div className="back-button-container">
                <Link to="/">
                    <button className="back-button">back</button>
                </Link>
            </div>
            <form className="input-container" onSubmit={getResults}>
                <select
                    name="height"
                    value={state.height}
                    onChange={changeHandler}
                    required
                    placeholder="choose"
                    className="input"
                >
                    <option value="" className="option">
                        height
                    </option>
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
            </form>
            <div>
                <input
                    name="weight"
                    value={state.weight}
                    onChange={changeHandler}
                    type="number"
                    pattern="\d*"
                    placeholder="weight"
                    className="input"
                />
            </div>

            {/* //radio buttons for gender */}
            <div className="radio-button-container">
                <div className="radio-div">
                    <label className="radio-label">Male</label>
                    <input
                        type="radio"
                        value="Male"
                        name="gender"
                        checked={state.maleChecked}
                        onChange={radioHandler}
                        className="radio-button"
                    />
                </div>
                <div className="radio-div">
                    <label className="radio-label">Female</label>
                    <input
                        type="radio"
                        value="Female"
                        name="gender"
                        checked={state.femaleChecked}
                        onChange={radioHandler}
                        className="radio-button"
                    />
                </div>
            </div>
            <div>
                <input
                    name="age"
                    value={state.age}
                    onChange={changeHandler}
                    type="number"
                    pattern="\d*"
                    className="input"
                    placeholder="age"
                />
            </div>

            <div>
                <button onClick={getResults} type="submit">
                    Check Build
                </button>
            </div>
            <EligibleProducts products={state.products} message={state.message} loading={state.loading} />
        </div>
    )
}

export default BuildChart
