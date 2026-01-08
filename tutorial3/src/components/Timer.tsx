import { useState } from "react"

const Timer = () => {

const [time, setTime] = useState (0);  

const startTime= ()=> {
    if (time === 1000) {
        setTime((prevTime) => prevTime + 1)
    }
}

const stopTime = ()=> {
    setTime(0)
}



  return (
    <div className="container text-center">

        <h1 style={{textAlign:"left", fontSize:"20px"}}>Session Timer with Auto-Stop</h1>
   
        <table className="table" >
  <thead>
    <tr>
      <th scope="col" className="table-success" style={{textAlign:"center"}}>Timer</th>
      <th scope="col" className="table-info" style={{textAlign:"center"}}>{time}</th>
    </tr>
  </thead>
</table>
        <button  className="btn btn-warning opacity-75" style={{width:"150px", padding:"5px", fontSize:"30px"}} onClick={startTime}>Start</button>
        <button className="btn btn-danger opacity-75" style={{width:"150px", padding:"5px", fontSize:"30px"}} onClick={stopTime}>Stop</button>
    </div>
  )
}

export default Timer