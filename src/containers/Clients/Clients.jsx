import '../Clients/clients.css'
import person3 from  '../../assets/person3.png'
import person1 from  '../../assets/person1.png'
import person2 from  '../../assets/person2.png'
import person4 from  '../../assets/person4.png'

const Clients = () => {

  return (
    <section>
      <div className="team">
        <div className="team-box">
          <p className="team-title">Meet the team</p>
          <h2 className="h2-clients">We are chilled and a laidback team</h2>
          <p className="team-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="team-img">
          <div><img src={person3} alt="team1" /></div>
          <div>
            <img src={person1} alt="team2" />
            <img src={person2} alt="team3" />
          </div>
        </div>
      </div>
      <p className="quote">“Fast and outstanding resutls. Edie understands their customer's needs. They have a young and talented team.”</p>
      <div className="profile"> 
        <div>
          <img src={person4} className="avatar" alt="" />
        </div>
        <div>
          <p className="client-title">Carlos Tran</p>
          <p className="client-subtitle">The Decorate Gatsby</p>
        </div>
      </div>
    </section>
  )
}

export default Clients