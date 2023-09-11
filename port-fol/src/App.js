import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage/HomePage'
import MailLogo from './img/Mail-Green.png'
import LinkedinLogo from './img/LinkedinLogo.png'
import { Introduction } from './HomePage/HomePage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
        <HomePage />
        <Footer />
    </div>
  );
}

function Navigation() {
  return (
    <nav className="App-nav">
      <button className="App-button"> Home </button>
      <button className="App-button"> Projects </button>
      <button className="App-button"> Contact me</button>
    </nav>
  )
}

function Footer() {
  return (
    <div className="App-footer">
      <a href="mailto:jule.dekyvere@gmail.com"><img className="Footer-Img" src={MailLogo} alt="Mailing logo"></img></a>
      <a href="https://www.linkedin.com/in/jule-dekyvere/"><img className="Footer-Img" src={LinkedinLogo} alt="Logo of LinkedIn"></img></a>
    </div>
  );
}

export default App;
