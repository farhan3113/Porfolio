import React from "react"
import Navbar from "./Components/Navbar.jsx/Navbar"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Experience from "./Components/Experience/Experience"
import Projects from "./Components/Projects/Projects"
import Footer from "./Components/Footer/Footer"
import Contact from "./Components/Contact/Contact"

function App() {
return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
)
}

export default App
