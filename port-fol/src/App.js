import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage/HomePage'
import ProjectPage from './Pages/ProjectPage/ProjectPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import CVPage from './Pages/CVPage/CVPage'
import MailLogo from './Resources/img/Mail.png'
import LinkedinLogo from './Resources/img/LinkedinLogo.png'
import {HashRouter, NavLink} from 'react-router-dom'
import {Route} from 'react-router-dom'
import React, {useState} from 'react';
import {Routes} from 'react-router-dom'
import MCEVERGEMPage from './Pages/MCEVERGEMPage/MCEVERGEMPage'
import { ConfigProvider, theme } from 'antd';
import './i18n';
import { useTranslation } from 'react-i18next';



function App() {

    const { t, i18n } = useTranslation();
  console.log('Current language:', i18n.language);
  console.log('Test translation:', t('nav_projects'));

  return (
    <ConfigProvider theme={{ algorithm: [theme.darkAlgorithm, theme.compactAlgorithm]}}>
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <HashRouter>
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
              <Route path="/MCEVERGEM" element={<MCEVERGEMPage />}/>
            </Routes>
          </div>
          <Footer />
      </HashRouter>
    </div>
    </ConfigProvider>
  );
}

//      <button className="App-button"><NavLink activeClassName="nav_link--active" className="nav_link" to="/Contact"> Contact me </NavLink></button>

function Navigation() {

  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  return (
    <nav className="App-nav">
        
        <h1 className="Nav-titel">Jule Dekyvere</h1>
      <div className="NavigationMenu" onClick={() => {setMenuOpen(!menuOpen)}}>
        <div className="fa fa-navicon" alt="Navigation menu"></div>
      </div>
      <div className="App-buttons" id={menuOpen ? "open" : ""}>
        <div className="App-navbtns">
          <NavLink className={({ isActive }) => isActive ? "nav_link nav_link--active" : "nav_link"} to="/Home" onClick={() => setMenuOpen(false)}>
            <button className="App-button-header" >
              {t("nav_home")}
            </button>
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? "nav_link nav_link--active" : "nav_link"} to="/Projects" onClick={() => setMenuOpen(false)}>
            <button className="App-button-header" >
              {t("nav_projects")}
            </button>
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? "nav_link nav_link--active" : "nav_link"} to="/CurriculumVitae" onClick={() => setMenuOpen(false)}>
            <button className="App-button-header">
              {t("nav_cv")}
            </button>
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? "nav_link nav_link--active" : "nav_link"} to="/Contact" onClick={() => setMenuOpen(false)}>
            <button className="App-button-header">
              {t("nav_contact")}
            </button>
          </NavLink>
        </div>
        <div className="lang-switcher">
          <button onClick={() => i18n.changeLanguage('nl')} className={i18n.language === 'nl' ? 'active' : ''}>NL</button>
          <button onClick={() => i18n.changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>EN</button>
        </div>
      </div>
      
    </nav>
  )
}

//<a href="https://www.instagram.com/onwinepodcast/" class="fa fa-instagram"></a>

function Footer() {
  
  const { t } = useTranslation();
  return (
    <div className="App-footer">
      <div className="Footer-content">
        <a href="mailto:jule.dekyvere@gmail.com" class="fa fa-envelope"alt="Mailing logo"></a>
        <a href="https://www.linkedin.com/in/jule-dekyvere/" class="fa fa-linkedin" alt="Logo of LinkedIn"></a>
        <a href="https://github.com/juledek" class="fa fa-github" alt="Logo of github"></a>
        <a href="https://soundcloud.com/user-432649769" class="fa fa-soundcloud" alt="Logo of soundcloud"></a>
        <p>{t("footer_message")}</p>
      </div>
    </div>
  );
}

export default App;
