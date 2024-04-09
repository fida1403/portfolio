import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';
import Title from './Components/Title/Title';
import Works from './Components/Works/Works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Title subtitle='Areas of Expertise' title='MY SKILLS'/>
      <Skills />
      <Title subtitle="Discover What I've Created" title="MY WORKS" />
      <Works />
      <Title subtitle='Get in Touch for Inquiries' title='CONTACT ME' />
      <Contact />
    </div>
  );
}

export default App;
