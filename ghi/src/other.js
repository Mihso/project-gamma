import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import './other.css';

function Other() {

    var [hello, sethello] = useState("");
    
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Other <code>src/App.js</code> Other Thing Other.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p> </p>
          <button className = "button" >button test</button>
        </header>
      </div>
    );
  }
  
  export default Other;
  