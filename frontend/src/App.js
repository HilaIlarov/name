import logo from './logo.svg';
import './App.css';
import GeneralForm from './components/GeneralForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Matches from './components/Matches';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
            <Route path="/matches" element={<Matches/>}/>
            <Route path="/" element={<GeneralForm/>} />
        </Routes>
    </BrowserRouter>
         {/* <GeneralForm/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          sdfsdf <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
