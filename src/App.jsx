import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Portofolio from "./components/Portofolio";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Portofolio />
    <Contact/>
    </>
  )
}