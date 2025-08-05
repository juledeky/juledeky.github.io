import {BrowserRouter, NavLink} from 'react-router-dom'
import {Route} from 'react-router-dom'
import React, {useState} from 'react';
import {Routes} from 'react-router-dom'

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="App-nav">
      <h4 className="Nav-titel">Jule Dekyvere</h4>
      <div className="NavigationMenu" onClick={() => {setMenuOpen(!menuOpen)}}>
        <div class="fa fa-navicon" alt="Navigation menu"></div>
      </div>
      <div className="App-buttons" id={menuOpen ? "open" : ""}>
        <div >
          <button className="App-button-header"><NavLink activeClassName="nav_link--active" className="nav_link" to="/Home"> Home </NavLink></button>
          <button className="App-button-header"><NavLink activeClassName="nav_link--active" className="nav_link" to="/Projects"> Projects </NavLink></button>
          <button className="App-button-header"><NavLink activeClassName="nav_link--active" className="nav_link" to="/CurriculumVitae"> My CV </NavLink></button>
        
        
        </div>
      </div>
    </nav>
  )
}

