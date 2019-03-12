import React from "react"
import BuildChart from "./components/BuildChart"
import Home from "./components/Home"
import { Route, Switch, withRouter } from "react-router-dom"
import MedicationList from "./components/MedicationList"
import Login from "./components/Login"
import Register from "./components/Register"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false
        }
    }

    // componentDidMount() {
    //     const token = localStorage.getItem("jwt")
    //     if (token) {
    //         this.setState({ loggedIn: true })
    //         this.props.history.push("/")
    //     } else {
    //         this.props.history.push("/login")
    //     }
    // }

    loginHandler = async e => {
        e.preventDefault()
        localStorage.getItem("jwt") ? await this.setState({ loggedIn: true }) : alert("you need to login")
    }

    logout = e => {
        localStorage.removeItem("jwt")
        this.setState({ loggedIn: false })
        this.props.history.push("/")
    }

    render() {
        return (
            // !this.state.loggedIn ? (
            //   <Switch>
            //     <Route path="/register" render={ownProps => <Register {...ownProps} />} />
            //     <Route path="/login" render={ownProps => <Login {...ownProps} loginHandler={this.loginHandler} />} />
            //   </Switch>
            // ) : (
            <div className="app">
                <Switch>
                    <Route exact path="/" render={ownProps => <Home {...ownProps} />} />
                    <Route path="/check-build" render={ownProps => <BuildChart {...ownProps} />} />
                    <Route path="/med-list" render={ownProps => <MedicationList {...ownProps} />} />
                </Switch>
                {/* <button onClick={this.logout}>logout</button> */}
            </div>
        )
    }
}

export default withRouter(App)
