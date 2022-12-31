import logo from './logo.svg';
import './App.css';
import Other from "./other"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, '');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and slave to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
      <BrowserRouter basename={basename}>
      <div title="App" className="container" style={{ backgroundColor: "black" }}>
          <Routes>
            <Route path="/" element={<Other />} />
          </Routes>
          </div>
          </BrowserRouter>

      </body>
    </div>
  );
}

export default App;
