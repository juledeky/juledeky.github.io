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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
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

//      <button className="App-button"><NavLink activeClassName="nav_link--active" className="nav_link" to="/Contact"> Contact me </NavLink></button>

function Navigation() {
  return (
    <nav className="App-nav">
      <h4 className="Nav-titel">Jule Dekyvere</h4>
      <div className="App-buttons">
        <button className="App-button"><NavLink activeClassName="nav_link--active" className="nav_link" to="/Home"> Home </NavLink></button>
        <button className="App-button"><NavLink activeClassName="nav_link--active" className="nav_link" to="/Projects"> Projects </NavLink></button>
        <button className="App-button"><NavLink activeClassName="nav_link--active" className="nav_link" to="/CurriculumVitae"> My CV </NavLink></button>
      </div>
       </nav>
  )
}

//<a href="https://www.instagram.com/onwinepodcast/" class="fa fa-instagram"></a>

function Footer() {
  return (
    <div className="App-footer">
      <div className="Footer-content">
        <a href="mailto:jule.dekyvere@gmail.com" class="fa fa-envelope"alt="Mailing logo"></a>
        <a href="https://www.linkedin.com/in/jule-dekyvere/" class="fa fa-linkedin" alt="Logo of LinkedIn"></a>
        <a href="https://github.com/juledek" class="fa fa-github" alt="Logo of github"></a>
        <a href="https://soundcloud.com/user-432649769" class="fa fa-soundcloud" alt="Logo of soundcloud"></a>
        <p>Deze webpagina maakt geen gebruik van cookies en uw data wordt niet opgeslagen en/of doorverkocht.</p>
      </div>
    </div>
  );
}

export default App;
