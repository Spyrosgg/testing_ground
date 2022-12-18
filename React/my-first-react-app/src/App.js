import React, { Component } from "react";
import "./App.css";


class App extends Component {
  constructor(props){
    super(props)
    this.state = {tasks:[]};
  };

  onSubmitTask = (e) => {
    this.setState({this.state.tasks.push()      
    })

  };


  render() {

    return (
      <>
        <h1>Tasker</h1>
        
        <div className="input">
          <form onSubmit={this.onSubmitTask}>
            <input 
              type="text"
              placeholder="enter your task"
              
            />
            <button type="submit">add task</button>
          </form>
        </div>
      </>
    );
  }
}

export default App;
