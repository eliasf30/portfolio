import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/hero';
import About from './Components/About/about';
import Technologies from './Components/Technologies/technologies';
import Skills from './Components/Skills/skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Skills/>
      
      
      <div style={{height:"50vh",display:"flex", backgroundColor:"black"}}></div>
    </div>
  );
}

export default App;
