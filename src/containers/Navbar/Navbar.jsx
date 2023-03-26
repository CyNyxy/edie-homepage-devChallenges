import { useState } from "react"
import './navbar.css'

const Menu = () => {

  return (
  <nav className="menu-primary">
    <ul className="nav-menu">
      <li><a href="">Home</a></li>
      <li><a href="">Services</a></li>
      <li><a href="">Our Works</a></li>
      <li><a href="">Clients</a></li>
      <li><a href="">Contact</a></li>
    </ul>
  </nav>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <div className="navbar">
    <div className="logo-box" role="banner">
      <p className="logo-text">Edie</p>
    </div>
    <div className="navbar-container"><Menu /></div>
    <div className="navbar-menu">
        {toggleMenu ? (
          <span class="material-icons-outlined menu-icon" onClick={() => setToggleMenu(false)}>close</span>
        ) : (
          <span class="material-icons-outlined menu-icon" onClick={() => setToggleMenu(true)}>menu</span>
        )}
        {toggleMenu && (
          <div className="navbar-menu_container">
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
  </div>

  )
}

export { Menu, Navbar }