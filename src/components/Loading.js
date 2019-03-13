import React from "react"
import ReactLoading from "react-loading"

const Loading = props => {
    const { loading } = props
    if (loading) {
        return (
            <div className="eligible-loading">
                <ReactLoading type={"spin"} color="#fff" width={"5%"} height={"5%"} />
            </div>
        )
    }
}

export default Loading
