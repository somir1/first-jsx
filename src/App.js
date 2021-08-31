import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome to my first react app
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
        <h1>Hello Dojo!</h1>

        <p>Things I need to do:</p>
        <ul>
          <li>Learn React</li>
          <li>Be a badass in react</li>
          <li>Hit the gym</li>
          <li>Get a Job</li>
        </ul>
    </div>
  );
}

export default App;
