import '../Clients/clients.css'

const Clients = () => {

  return (
    <section>
      <div className="team">
        <div className="team-box">
          <p className="team-title">Meet the team</p>
          <h2>We are chilled and a laidback team</h2>
          <p className="team-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="team-img">
          <div><img src="./src/assets/person3.png" alt="team1" /></div>
          <div>
            <img src="./src/assets/person1.png" alt="team2" />
            <img src="./src/assets/person2.png" alt="team3" />
          </div>
        </div>
      </div>
        <p className="quote">“Fast and outstanding resutls. Edie understands their customer's needs. They have a young and talented team.”</p>
        <div className="profile"> 
          <div>
            <img src="./src/assets/person4.png" className="avatar" alt="" />
          </div>
          <div>
            <p>Carlos Tran</p>
            <p>The Decorate Gatsby</p>
          </div>
        </div>
    </section>
  )
}

export default Clients