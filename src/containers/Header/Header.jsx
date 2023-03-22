import React from "react"
import '../Header/header.css'

const Header = () => {

  return (
    <header>  
      <div className="intro-title">
        <p className="subtitle">Unhappy with your website?</p>
        <h1>We create beautiful and fast web services</h1>
      </div>
      <div className="banner">
        <img src="./src/assets/hero.jpg" alt="banner" />
      </div>
      <div className="intro">
        <h1>Story, emotion and purpose</h1>
        <p className="intro-text">We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.</p>
        <div className="contact-box">
          <form action="submit">
            <p className="form-text">Want us to contact you?</p>
            <div className="form-box">
              <input type="email" />
              <button>Join</button>
            </div>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header