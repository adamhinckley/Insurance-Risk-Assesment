import React from "react"
import ReactLoading from "react-loading"

const Loading = props => {
    const { loading } = props
    if (loading) {
        return (
            <div className="loading">
                <ReactLoading type={"spin"} color="#fff" width={"25%"} height={"25%"} />
            </div>
        )
    }
}

export default Loading
