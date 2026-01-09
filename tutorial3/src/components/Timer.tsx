import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0); // start from 0
  const [isRunning, setIsRunning] = useState(false); // start from 0
  const [state, setState] = useState("Running...");
  // in react how increase every 1 second - google
  // https://iq.js.org/questions/react/how-to-update-a-component-every-second
  /* useEffect(() => {
    const interval = setInterval(() => {
      console.log("1111")
    }, 5000);

    return () => clearInterval(interval);
  }, []); */
  useEffect(() => {
    let interval: number | undefined;
    let autostop: number | undefined;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    if (time === 15) {
      setState("Time's up! Resetting...");
      setIsRunning(false);

      autostop = setTimeout(() => {
        setTime(0);
        setState("Timer ready");
      }, 3000);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(autostop);
    };
  }, [isRunning, time]); // useEffect is running when change isRunning

  const startButtonClick = () => {
    setState("Running...");
    setIsRunning(true);
  };

  const stopButtonClick = () => {
    setIsRunning(false);
  };

  return (
    <div className="container text-center">
      <h1 style={{ textAlign: "left", fontSize: "20px" }}>
        Session Timer with Auto-Stop
      </h1>

      <table className="table">
        <thead>
          <tr>
            <th
              scope="col"
              className="table-success"
              style={{ textAlign: "center" }}
            >
              Timer
            </th>
            <th
              scope="col"
              className="table-info"
              style={{ textAlign: "center" }}
            >
              {time}
            </th>
          </tr>
        </thead>
      </table>
      <div>
      <button
        className="btn btn-warning opacity-75"
        style={{ width: "150px", padding: "5px", fontSize: "30px" }}
        onClick={startButtonClick}
      >
        Start
      </button>
      <button
        className="btn btn-danger opacity-75"
        style={{ width: "150px", padding: "5px", fontSize: "30px", marginLeft:"10px" }}
        onClick={stopButtonClick}
      >
        Stop
      </button>
      </div>
      <span>{state}</span>
    </div>
  );
};

export default Timer;
