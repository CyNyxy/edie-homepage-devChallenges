import '../Header/header.css'
import heroban from  '../../assets/hero.jpg'

const Header = () => {

  return (
    <header>  
      <div className="title-box">
        <p className="subtitle">Unhappy with your website?</p>
        <h1>We create beautiful and fast web services</h1>
      </div>
      <div className="banner">
        <img src={heroban} className="hero" alt="banner" />
      </div>
      <div className="intro-box">
        <h1>Story, emotion and purpose</h1>
        <p>We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.</p>
        <div className="contact-box">
          <form action="submit">
            <p className="form-text">Want us to contact you?</p>
            <div className="form-box">
              <input type="email" placeholder="Email" />
              <button className="join">Join</button>
            </div>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header