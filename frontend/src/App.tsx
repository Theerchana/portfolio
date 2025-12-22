import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      {/* Home / Hero */}
      <section id="home">
        <Hero />
      </section>

      {/* About */}
      <section id="about">
        <About />
      </section>

      {/* Skills */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects">
        <Projects />
      </section>

      {/* Education */}
      <section id="education">
        <Education />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
