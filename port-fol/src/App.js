import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage/HomePage'
import ProjectPage from './Pages/ProjectPage/ProjectPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import CVPage from './Pages/CVPage/CVPage'
import MailLogo from './Resources/img/Mail.png'
import LinkedinLogo from './Resources/img/LinkedinLogo.png'
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
              <Route path='/CurriculumVitae' element={<CVPage />}/>
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
      <button className="App-button"><NavLink activeClassName="nav_link--active" className="nav_link" to="/Contact"> Contact me </NavLink></button>
      <button className="App-button"><NavLink activeClassName="nav_link--active" className="nav_link" to="/CurriculumVitae"> My CV </NavLink></button>
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
