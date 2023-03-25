import '../Works/works.css'

const Works = () => {
  
  return (
    <section>
      <h2>Good design means good business</h2>
      <div className="grid-design">
        <div className="design-item">
          <img src="./src/assets/smarthome.jpg" className="design-img" alt="smarthome" />
          <p className="design-subtitle">Fullstack application</p>
          <p className="design-title">Smart home dashboard</p>
        </div>
        <div className="design-item">
          <img src="./src/assets/onboard.png" className="design-img" alt="onboard" />
          <p className="design-subtitle">UX/UI design</p>
          <p className="design-title">Onboard application</p>
        </div>
        <div className="design-item">
          <img src="./src/assets/booking.png" className="design-img" alt="booking" />
          <p className="design-subtitle">Mobile application</p>
          <p className="design-title">Booking system</p>
        </div>
        <div className="design-item">
          <img src="./src/assets/juice.png" className="design-img" alt="juice" />
          <p className="design-subtitle">Frontend application</p>
          <p className="design-title">Juice product homepage</p>
          <div className="link-design">
          <a href="#" className="seemore">See more &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works