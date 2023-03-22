import '../Navbar/navbar.css'

const Navbar = () => {

  return (
<nav className="menu-primary">
  <div className="logo-box">
    <p className="logo">Edie</p>
  </div>
  <div className="menu-wrap">
    <ul className="nav-menu">
      <div className="menu-item"><li><a href="">Home</a></li></div>
      <div className="menu-item"><li><a href="">Services</a></li></div>
      <div className="menu-item"><li><a href="">Our Works</a></li></div>
      <div className="menu-item"><li><a href="">Clients</a></li></div>
      <div className="menu-item"><li><a href="">Contact</a></li></div>
    </ul>
  </div>
</nav>
  )
}

export default Navbar