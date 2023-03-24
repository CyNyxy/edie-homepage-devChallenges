import '../Services/services.css'

const Services = () => {

  return (
    <section>
      <h2>We offer high demand services</h2>
      <div className="services">
        <div className="service-card">
          <div className="icon-box box1"><span class="material-icons">create</span></div>
          <p className="service-title">UI/UX Design</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis</p>
          <button type="submit">Get started</button>
        </div>
        <div className="service-card">
          <div className="icon-box box2"><span class="material-icons">code</span></div>
          <p className="service-title">Front End</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis</p>
          <button type="submit">Get started</button>
        </div>
        <div className="service-card">
          <div className="icon-box box3"><span class="material-icons">storage</span></div>
          <p className="service-title">Back End</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis</p>
          <button type="submit">Get started</button>
        </div>
      </div>
    </section>
  )
}

export default Services