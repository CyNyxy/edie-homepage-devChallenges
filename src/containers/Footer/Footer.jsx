import '../Footer/footer.css'
import { Menu } from "../Navbar/Navbar"

const Footer = () => {

  return (
    <>
    <footer>
      <div className="nav-box">
        <Menu />
      </div>
      <div className="social">
        <p className="logo-bot">Edie</p>
        <img src="./src/assets/instagram.svg" alt="instagram" />
        <img src="./src/assets/linkedin.svg" alt="linkedin" />
        <img src="./src/assets/twitter.svg" alt="twitter" />
      </div>
      <div className="footer-form">
        <form action="submit">
        <p className="footer-text">Want us to contact you?</p>
        <div className="form-box">
          <input type="email" placeholder="Email" />
          <button className="join">Join</button>
        </div>
        </form>
      </div>
    </footer>
    <div className="sign">
      <p class="footer-info">created by&nbsp;<u><b><a href="https://github.com/CyNyxy">Nyxy</a></b></u>&nbsp;- devChallenges.io</p>
    </div>
      </>
  )
}

export default Footer