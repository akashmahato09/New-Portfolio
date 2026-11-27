
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import About from './sections/About';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Skills from './sections/Skills';


function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default App;
