import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage/HomePage'
import ProjectPage from './ProjectPage/ProjectPage'
import ContactPage from './ContactPage/ContactPage'
import MailLogo from './img/Mail.png'
import LinkedinLogo from './img/LinkedinLogo.png'
import {BrowserRouter, NavLink} from 'react-router-dom'
import {Route} from 'react-router-dom'
import {Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navigation />
        </header>
          <div>
            <Routes>
              <Route path='/Home' element={<HomePage />}/>
              <Route path='/Projects' element={<ProjectPage />}/>
              <Route path='/Contact' element={<ContactPage />}/>
              <Route path="/" element={<HomePage />}/>
              <Route path="*" element={<HomePage />}/>
            </Routes>
          </div>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="App-nav">
      <button className="App-button"><NavLink activeClassName="nav_link--active" className="nav_link" to="/Home"> Home </NavLink></button>
      <button className="App-button"><NavLink activeClassName="nav_link--active" className="nav_link" to="/Projects"> Projects </NavLink></button>
      <button className="App-button"><NavLink activeClassName="nav_link--active" className="nav_link" to="/Contact"> Contact me</NavLink></button>
    </nav>
  )
}

function Footer() {
  return (
    <div className="App-footer">
      <div className="Footer-content">
        <a href="mailto:jule.dekyvere@gmail.com"><img className="Footer-Img" src={MailLogo} alt="Mailing logo"></img></a>
        <a href="https://www.linkedin.com/in/jule-dekyvere/"><img className="Footer-Img" src={LinkedinLogo} alt="Logo of LinkedIn"></img></a>
      </div>
    </div>
  );
}

export default App;
