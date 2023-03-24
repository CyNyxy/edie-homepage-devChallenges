import '../Works/works.css'

const Works = () => {
  
  return (
    <section>
      <h2>Good design means good business</h2>
      <div className="grid-design">
        <div className="design-item">
          <img src="./src/assets/smarthome.jpg" className="design-item" alt="smarthome" />
          <p className="design-subtitle">Fullstack application</p>
          <p className="design-title">Smart home dashboard</p>
        </div>
        <div className="design-item">
          <img src="./src/assets/onboard.png" className="design-item" alt="onboard" />
          <p className="design-subtitle">UX/UI design</p>
          <p className="design-title">Onboard application</p>
        </div>
        <div className="design-item">
          <img src="./src/assets/booking.png" className="design-item" alt="booking" />
          <p className="design-subtitle">Mobile application</p>
          <p className="design-title">Booking system</p>
        </div>
        <div className="design-item">
          <img src="./src/assets/juice.png" className="design-item" alt="juice" />
          <p className="design-subtitle">Frontend application</p>
          <p className="design-title">Juice product homepage</p>
        </div>
      </div>
    </section>
  )
}

export default Works