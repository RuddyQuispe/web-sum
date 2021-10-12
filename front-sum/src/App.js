import logo from './logo.svg';
import './App.css';
import Sum from './components/Sum';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Sum></Sum>
      </header>
    </div>
  );
}

export default App;
