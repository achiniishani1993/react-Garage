import { useState } from "react";

const Button = ({ minValue = 0 }) => {
  const [value, SetValue] = useState(minValue);

  const handleIncrementCounter = () => {
    SetValue((prevValue) => prevValue + 1);
  };

  const handleDecrementCounter = () => {
    SetValue((prevValue) => prevValue - 1);
  };
  const handleReset = () => {
    SetValue(0);
  };

  return (
    <div className="d-flex align-items-center gap-2">
      <button
        className="btn btn-outline-primary"
        style={{ width: "90px", marginTop: "20px" }}
        onClick={handleIncrementCounter}
      >
        +
      </button>
      <span className="text-primary" style={{ marginTop: "20px" }}>
        {value}
      </span>
      <button
        className="btn btn-outline-primary"
        style={{ width: "90px", marginTop: "20px" }}
        onClick={handleDecrementCounter}
      >
        -
      </button>
      <button
        className="btn btn-outline-primary"
        style={{ width: "90px", marginTop: "20px" }}
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default Button;
