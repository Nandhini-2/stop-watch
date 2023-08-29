import React, {useState, useEffect} from "react";
import Header from "./components/Header"


function App(){

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let intervalId;
    //The code we want to run
    if (isRunning) { 
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, 
  //The dependancy array
  [isRunning, time]);

  function startAndStop() {
    setIsRunning(!isRunning);
  };

  function reset(){
    setTime(0);
  }

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  return (<div className="container">
  <Header/>
   <h2 >
     {hours}:{minutes.toString().padStart(2, "0")}:
     {seconds.toString().padStart(2, "0")}:
     {milliseconds.toString().padStart(2, "0")}
   </h2>
   <div>
     <button onClick={startAndStop}>{isRunning ? "Stop" : "Start"}</button>
     
     <button  onClick={reset}>
       Reset
     </button>
   </div>
 </div>
);
};

export default App;