import {useState} from 'react';
import './App.css';

function Mybutton(){
  const [text, setText] = useState("");

  function handleClick(){
    setText(text + "some")
  }
  return(
    <button onClick={handleClick}>your input is: {text}</button>
  );
}

function App() {
  const user = {
    name:"Spyro",
    surname: "gavriilidis",
    age: 109
  };

  return (
    <div className="App">
      <h1>Testing {user.age}</h1>
      <form>
        <label htmlFor="#input">I'm a label </label>
        <input type="text" id="input" placeholder="texting"/>
      </form><br/>
      <Mybutton />
    </div>
  );
}

export default App;
