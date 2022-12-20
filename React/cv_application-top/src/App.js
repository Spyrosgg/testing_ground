import logo from './logo.svg';
import Heading from './components/Heading.jsx'
import WorkHistory from './components/WorkHistory.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import RenderCv from './components/RenderCv.jsx'
//import './App.css';


function AddAnotherField(){
  return <WorkHistory className="work-history" />
}

function App() {
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
      
      <div>
        <Heading className="heading" />
        <WorkHistory className="work-history" />
        {/* need to useState here
        <button onClick={AddAnotherField}>ADD ANOTHER FIELD</button>
        */}
        <Education className="education" />
        <Skills className="skills" />

        <RenderCv className="render-cv" />

      </div>

        <img src={logo} className="App-logo" alt="logo" />
          <a
          className="App-link"
          href="https://github.com/Spyrosgg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      
    </div>
  );
}

export default App;
