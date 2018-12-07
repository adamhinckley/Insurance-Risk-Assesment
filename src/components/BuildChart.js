import React from "react";

const BuildChart = ({ weight, height, onChange, message, buildChecker }) => {
  return (
    <div>
      <div>
        <label>Weight</label>
        <input name="weight" value={weight} onChange={onChange} type="number" pattern="\d*" />
      </div>
      <div>
        <label>Height</label>
        <select name="height" value={height} onChange={onChange} className="custom-select" required>
          <option value="">Height</option>
          <option value="56">4'8</option>
          <option value="57">4'9</option>
          <option value="58">4'10</option>
          <option value="59">4'11</option>
          <option value="60">5'0</option>
          <option value="61">5'1</option>
          <option value="62">5'2</option>
          <option value="63">5'3</option>
          <option value="64">5'4</option>
          <option value="65">5'5</option>
          <option value="66">5'6</option>
          <option value="67">5'7</option>
          <option value="68">5'8</option>
          <option value="69">5'9</option>
          <option value="70">5'10</option>
          <option value="71">5'11</option>
          <option value="72">6'0</option>
          <option value="73">6'1</option>
          <option value="74">6'2</option>
          <option value="75">6'3</option>
          <option value="76">6'4</option>
          <option value="77">6'5</option>
          <option value="78">6'6</option>
          <option value="79">6'7</option>
          <option value="80">6'8</option>
          <option value="81">6'9</option>
          <option value="82">6'10</option>
        </select>
      </div>
      <div>
        <button onClick={buildChecker}>Check Build</button>
      </div>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default BuildChart;
