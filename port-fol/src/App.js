import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage/HomePage'
import { Introduction } from './HomePage/HomePage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> JULE DEKYVERE </h1>
      </header>
        <Navigation />
        <HomePage />
    </div>
  );
}

function Navigation() {
  return (
    <nav className="App-nav">
      <button className="App-button"> Page one </button>
      <button className="App-button"> Page two </button>
      <button className="App-button"> Page three</button>
    </nav>
  )
}

function Footer() {
  return (
    <h1>Dit is de footer</h1>
  );
}

export default App;
