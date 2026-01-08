import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("counting...");

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    
    if (count >= 10 || count <= -10) {
      setStatus("Limit reached! Resetting...");

     const autoReset = setTimeout(() => {
        setCount(0);
        setStatus("counting...");
      }, 2000);
      return () => clearTimeout(autoReset);
    }
    
  }, [count]);

  return (
    <div className="d-flex align-items-center gap-2 container text-center">
     <h1 style={{textAlign:"left", fontSize:"20px"}}>Count App with Auto</h1>
   
      <button
        className="btn btn-outline-primary"
        style={{ width: "90px", marginTop: "20px" }}
        onClick={increment}
      >
        +
      </button>
      <span className="text-primary" style={{ marginTop: "20px" }}>
        {count}
      </span>
      <button
        className="btn btn-outline-primary"
        style={{ width: "90px", marginTop: "20px" }}
        onClick={decrement}
      >
        -
      </button>
      <span>{status}</span>
    </div>
  );
};

export default Counter;
