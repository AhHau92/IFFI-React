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
      <Routes>
        <Route path='residential' element={<Residential />}/>
        <Route path='commercial' element={<Commercial />}/>
        <Route path='developerproject' element={<DeveloperProject />}/>
        <Route index element={<Home />}/>
        <Route path='aboutus' element={<About />}/>
        <Route path='contactus' element={<Contact />}/>
      </Routes>
      <Footer/>   
    </BrowserRouter>
  );
}

export default App;
