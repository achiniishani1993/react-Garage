import { useEffect, useState } from "react";

const Logout = () => {
const [secondIdle, setSecondIdle] = useState(0);
const[isActive, setIsActive]= useState(true);
const[state, setState]= useState("User active");

useEffect (()=> {
   let interval: number | undefined;
   let autoLogout: number|undefined;
   
   if (isActive){
   interval = setInterval (()=> {
    setSecondIdle((prevSecondIdle)=> prevSecondIdle + 1);
   },1000);
   }
   if (secondIdle === 8){
    setState("Logging out due to inactivity...");
    setIsActive(false);

    autoLogout = setTimeout (()=> {
        setSecondIdle(0);
         setState("Logged out");
    
    },2000)
   }
   return ()=> {
    clearInterval(interval) 
    clearInterval(autoLogout)
};
},[isActive, secondIdle])

const handleSimulateActivity = ()=> {
     setSecondIdle(0);
     setState("User active");
}

const handleLogin =()=> {
    setSecondIdle(0);
    setIsActive(true);
    setState("User active");
}
 return (
  <div style={{ textAlign: "center", marginTop: "40px" }}>
    <h2>Inactivity Logout Timer</h2>

    <p>
      <strong>Idle Time:</strong> {secondIdle} seconds
    </p>

    <p>
      <strong>Status: {state}</strong> 
    </p>

    <div style={{ marginTop: "20px" }}>
      <button onClick={handleSimulateActivity}>
        Simulate Activity
      </button>

      <button onClick={handleLogin} style={{ marginLeft: "10px" }}>
        Login
      </button>
    </div>
  </div>
);

}

export default Logout