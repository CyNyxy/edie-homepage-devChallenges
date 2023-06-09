import { Navbar } from "./containers/Navbar/Navbar"
import Header from "./containers/Header/Header"
import Services from "./containers/Services/Services"
import Works from "./containers/Works/Works"
import Clients from "./containers/Clients/Clients"
import Footer from "./containers/Footer/Footer"

function App() {

  return (
    <div className="container">
      <Navbar />
      <Header />
      <main>
        <Services />
        <Works />
        <Clients />
      </main>
      <Footer />
    </div>
  )
}

export default App