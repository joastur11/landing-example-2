import { About } from "./components/About"
import { Circuits } from "./components/Circuits"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Reviews } from "./components/Reviews"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Circuits />
      <Reviews />
    </>
  )
}

export default App
