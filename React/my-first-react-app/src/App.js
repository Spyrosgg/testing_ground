import React, { Component } from "react";
import "./App.css";


class App extends Component {
  constructor(props){
    super(props)
    this.state = {task:"",
    tasks:[]};
  };

  handleSubmit=(e)=>{
    e.preventDefault();
    this.setState((e)=>{
      tasks:
    });
  }


 
  render(){
    return (
      <>
        <h1>Tasker</h1>
        
        <div className="input">
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text"
              placeholder="enter your task"
            />
            <button type="submit">add task</button>
          </form>
        </div>
      </>
    )
  }
}

export default App;
