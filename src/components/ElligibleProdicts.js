import React from "react"
import ReactLoading from "react-loading"
import Loading from "./Loading"

const EligibleProducts = props => {
    const { products, message, loading, outcome } = props
    if (loading) {
        return <Loading loading={loading} />
    } else if (outcome) {
        return (
            <div className="eligible-products-container">
                <p className="build-message">{message}</p>

                {outcome.map(product => {
                    if (product.product && product.medication) {
                        return (
                            <div key={product.medication + product.product + product.time} className="returned-data">
                                <ul>
                                    <li>Product: {product.product}</li>
                                    <li>Medication: {product.medication}</li>
                                    <li>Indication: {product.indication}</li>
                                    <li>TIme: {product.time}</li>
                                    <li>Outcome: {product.outcome}</li>
                                </ul>
                            </div>
                        )
                    }
                })}
            </div>
        )
    } else if (products) {
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
