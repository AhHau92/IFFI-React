import './App.css';
import Commercial from './pages/commercial/Commercial';
import Residential from './pages/residential/Residential';
import Home from './pages/home/Home';
import DeveloperProject from './pages/developer project/DeveloperProject';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Residential />
      <Commercial />
      <DeveloperProject />
      <Home />
      <About />
      <Contact />  
      {/* <Footer/>    */}
    </BrowserRouter>
  );
}

export default App;
