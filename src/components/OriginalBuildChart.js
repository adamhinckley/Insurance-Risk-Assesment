import React from "react";

const allProductsArr = [
  { carrier: "Foresters", product: "Strong Foundation", type: "term" },
  { carrier: "Foresters", product: "Smart UL" },
  { carrier: "Foresters", product: "Prepared" },
  { carrier: "Foresters", product: "Advantage Plus Whole Life" },
  { carrier: "Foresters", product: "PlanRight" },
  { carrier: "CFG", product: "Safeshield", type: "term" },
  { carrier: "CFG", product: "Classic Choice Whole Life" },
  { carrier: "Mutual of Omaha", product: "Term Life Express", type: "term" },
  { carrier: "Mutual of Omaha", product: "Guaranteed Advantage" },
  { carrier: "Mutual of Omaha", product: "Living Promise" },
  { carrier: "Mutual of Omaha", product: "Guaranteed Universal Life" },
  { carrier: "Mutual of Omaha", product: "Children's Whole Life" },
  { carrier: "National Western Life", product: "Freedom Term Express" },
  { carrier: "Phoenix/ Nassau Re", product: "Safe Harbor" },
  { carrier: "Phoenix/ Nassau Re", product: "Remembrance" },
  { carrier: "Transamerica", product: "Whole Life" },
  { carrier: "Transamerica", product: "Acci-Protector" },
  { carrier: "", product: "" },
  { carrier: "", product: "" },
  { carrier: "", product: "" },
  { carrier: "", product: "" },
  { carrier: "", product: "" },
  { carrier: "", product: "" },
  { carrier: "", product: "" },
  { carrier: "", product: "" },
  { carrier: "", product: "" }
];
class BuildChart extends React.Component {
  constructor() {
    super();
    this.state = {
      height: undefined,
      weight: "",
      message: "",
      products: []
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  allProducts = () => {
    this.setState({ message: "Build is good for all products", products: allProductsArr });
  };

  simplifiedNoForestersCFG = () => {
    this.setState({
      message: "Build is good for all products except Foresters Strong Foundation, Smart UL, Advantage plus, CFG term",
      products: []
    });
  };

  buildChecker = (e, clientHeight, clientWeight) => {
    e.preventDefault();
    console.log("build checker fired", this.state.products);
    this.setState({ message: "" });

    let { height, weight } = this.state;
    height = Number(height);
    if (height === 56 && weight <= 185) {
      this.allProducts();
    } else if (height === 56 && weight <= 190) {
      this.simplifiedNoForestersCFG();
    } else if (height === 56 && weight <= 194) {
      this.setState({
        message:
          "Build is good for all products except Foresters Strong Foundation, Smart UL, Advantage plus, CFG term",
        products: []
      });
    } else if (height === 57 && weight <= 194) {
      this.setState({ message: "Height & Weight is ok", products: [] });
    } else {
      this.setState({ message: "only apply Transamerica 45-85 or guaranteed issue", products: [] });
    }
  };

  render() {
    const { weight, height, products, message } = this.state;
    console.log(allProductsArr);

    return (
      <div>
        <div>
          <label>Weight</label>
          <input name="weight" value={weight} onChange={this.changeHandler} type="number" pattern="\d*" />
        </div>
        <div>
          <label>Height</label>
          <select name="height" value={height} onChange={this.changeHandler} className="custom-select" required>
            <option value="">Height</option>
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
        </div>
        <div>
          <button onClick={this.buildChecker}>Check Build</button>
        </div>
        <div>
          <p>{message}</p>

          {this.state.products.map(p => {
            return (
              <p>
                {p.carrier} &nbsp;
                {p.product}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BuildChart;
