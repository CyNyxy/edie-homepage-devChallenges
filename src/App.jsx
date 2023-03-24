import Navbar from "./components/Navbar/Navbar"
import Header from "./containers/Header/Header"
import Services from "./containers/Services/Services"
import Works from "./containers/Works/Works"
import './App.css'

function App() {

  return (
    <div className="container">
      <Navbar />
      <Header />
      <main>
        <Services />
        <Works />
      </main>
    </div>
  )
}

export default App