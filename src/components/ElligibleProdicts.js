import React from "react"
import ReactLoading from "react-loading"

const EligibleProducts = props => {
    const { products, message, loading } = props
    if (loading) {
        return (
            <div className="eligible-loading">
                <br />
                <p>Getting your results</p>
                <ReactLoading type={"spin"} color="#fff" width={"5%"} height={"5%"} />
            </div>
        )
    } else {
        return (
            <div className="eligible-returned">
                <p className="build-message">{message}</p>
                {products.map(product => {
                    return (
                        <ul key={product.id}>
                            <li>
                                {product.carrier} - {product.product2} {product.product3}
                            </li>
                        </ul>
                    )
                })}
            </div>
        )
    }
}

export default EligibleProducts
