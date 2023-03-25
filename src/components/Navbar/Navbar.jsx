import '../Navbar/navbar.css'

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

  return (
  <div className="navbar">
    <div className="logo-box" role="banner">
      <p className="logo-text">Edie</p>
    </div>
    <Menu />
  </div>

  )
}

export { Menu, Navbar }