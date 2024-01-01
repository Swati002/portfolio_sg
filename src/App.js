import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Hero from './components/Hero';
import Partitionx from './components/Partitionx';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Skill from './components/Skill';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <ChakraProvider>
    <Navbar/>
      <Hero/>
      {/* <Partitionx/> */}
      <About/>
      {/* <Skill/> */}
      <Projects/>
      <Certifications/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
