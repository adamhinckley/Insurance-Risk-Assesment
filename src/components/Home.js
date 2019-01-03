import React from "react";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <div className="home">
      <h2>Risk Assessment</h2>
      <div>
        <Link to="/check-build">
          <button>Check Build</button>
        </Link>
      </div>
      <div>
        <Link to="med-list">
          <button>Check Medication</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
