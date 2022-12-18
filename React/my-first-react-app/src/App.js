import React, { Component } from "react";
import "./App.css";


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      task: "",
      tasks: [],
    };
  };

  handleChange = (e) => {
    this.setState({
      task : e.target.value
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: (this.state.task),
      task: ""
    });
  };


  render() {
    const { task, tasks } = this.state;

    return (
      <>
        <h1>Tasker</h1>
        
        <div className="input">
          <form onSubmit={this.onSubmitTask}>
            <input 
              type="text"
              placeholder="enter your task"
              onChange={this.handleChange}
              value={task}
            />
            <button type="submit">add task</button>
          </form>
            {console.log(tasks)}
        </div>
      </>
    );
  }
}

export default App;
