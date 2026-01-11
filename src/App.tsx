import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experiences from "./sections/Experiences";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experiences />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
