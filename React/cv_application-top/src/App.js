import { useState } from 'react';
import logo from './logo.svg';
import Heading from './components/Heading.jsx'
import WorkHistory from './components/WorkHistory.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import RenderCv from './components/RenderCv.jsx'
import './App.css';


function AddAnotherField(){
  return <WorkHistory className="work-history" />
}

function App() {
  const [heading, setHeading] = useState(
    {
      fname:"",
      lname:"",
      profession:"",
      phone:0,
      email:""
    }
  );
  return (
    <div className="App">
        <header className="App-header">
          <table>
            <tbody>
              <tr>
                <th>1. HEADING ➡️</th>
                <th>2. WORK HISTORY ➡️</th>
                <th>3. EDUCATION ➡️</th>
                <th>4. SKILLS ➡️</th>
              </tr>
            </tbody>
          </table>
          <hr/>
        </header>
        
      <div className='main'>
        <div className='input-field'>
          <Heading 
            className="heading" 
            heading={heading} 
            headingOnChange={setHeading}/>
          <WorkHistory className="work-history" />
          {/* need to useState here
          <button onClick={AddAnotherField}>ADD ANOTHER FIELD</button>
          */}
          <Education className="education" />
          <Skills className="skills" />
          <img src={logo} className="App-logo" alt="logo" />
            <a
            className="App-link"
            href="https://github.com/Spyrosgg"
            target="_blank"
            rel="noopener noreferrer" >
            Github
          </a>
        </div>
        <div className='render'>
          <RenderCv 
          className="render-cv"
          heading={heading} />
        </div>
      </div>

      
    </div>
  );
}

export default App;
