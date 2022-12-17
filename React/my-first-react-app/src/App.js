import React, { Component } from "react";
import "./App.css";
import Overview from "./components/Overview";

class App extends Component {
  render() {
    return (
      <>
        <h1>Tasker</h1>
        
        <div className="input">
          <input 
            placeholder="input your task" 
            onChange={()=>{}}
          />
          <button type="submit" onClick={()=>{}}>Submit</button>
        </div>



         <Overview task="this is a task sample 1" />
      </>
    );
  }
}

export default App;
