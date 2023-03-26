import '../Works/works.css'
import smarthome from  '../../assets/smarthome.jpg'
import onboard from  '../../assets/onboard.png'
import booking from  '../../assets/booking.png'
import juice from  '../../assets/juice.png'

const Works = () => {
  
  return (
    <section>
      <h2 className="h2-works">Good design means good business</h2>
      <div className="grid-design">
        <div className="design-item">
          <img src={smarthome} className="design-img" alt="smarthome" />
          <p className="design-subtitle">Fullstack application</p>
          <p className="design-title">Smart home dashboard</p>
        </div>
        <div className="design-item">
          <img src={onboard} className="design-img" alt="onboard" />
          <p className="design-subtitle">UX/UI design</p>
          <p className="design-title">Onboard application</p>
        </div>
        <div className="design-item">
          <img src={booking} className="design-img" alt="booking" />
          <p className="design-subtitle">Mobile application</p>
          <p className="design-title">Booking system</p>
        </div>
        <div className="design-item">
          <img src={juice} className="design-img" alt="juice" />
          <p className="design-subtitle">Frontend application</p>
          <p className="design-title">Juice product homepage</p>
          <div className="link-design">
            <a href="#" className="seemore">see more &nbsp;&rarr;</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works