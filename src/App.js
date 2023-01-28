import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome />
      </header>
    </div>
  );
}

function Welcome() {
  return (
    <div>
      <h2>Welcome Jason</h2>
    </div>
    );
}

export default App;
