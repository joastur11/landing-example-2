import { About } from "./components/About"
import { Circuits } from "./components/Circuits"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Circuits />
      <Contact />
      <Footer />
    </>
  )
}

export default App
