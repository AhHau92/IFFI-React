import './App.css';
import Commercial from './pages/commercial/Commercial';
import Residential from './pages/residential/Residential';
import Home from './pages/home/Home';
import DeveloperProject from './pages/developer project/DeveloperProject';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import ProjectOne from './pages/Project_R1-4_C5-8_DP9-12/ProjectOne';
import ProjectSecond from './pages/Project_R1-4_C5-8_DP9-12/ProjectSecond';
import ProjectThird from './pages/Project_R1-4_C5-8_DP9-12/ProjectThird';
import ProjectFourth from './pages/Project_R1-4_C5-8_DP9-12/ProjectFourth';
import ProjectFifth from './pages/Project_R1-4_C5-8_DP9-12/ProjectFifth';
import ProjectSixth from './pages/Project_R1-4_C5-8_DP9-12/ProjectSixth';
import ProjectSeventh from './pages/Project_R1-4_C5-8_DP9-12/ProjectSeventh';
import ProjectEighth from './pages/Project_R1-4_C5-8_DP9-12/ProjectEighth';
import ProjectNinth from './pages/Project_R1-4_C5-8_DP9-12/ProjectNinth';
import ProjectTenth from './pages/Project_R1-4_C5-8_DP9-12/ProjectTenth';
import ProjectEleventh from './pages/Project_R1-4_C5-8_DP9-12/ProjectEleventh';
import ProjectTwelfth from './pages/Project_R1-4_C5-8_DP9-12/ProjectTwelfth';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='residential' element={<Residential />} />
        <Route path='commercial' element={<Commercial />} />
        <Route path='developerproject' element={<DeveloperProject />} />
        <Route path='aboutus' element={<About />} />
        <Route path='contactus' element={<Contact />} />
        <Route path='projectOne' element={<ProjectOne />} />
        <Route path='ProjectSecond' element={<ProjectSecond />} />
        <Route path='ProjectThird' element={<ProjectThird />} />
        <Route path='ProjectFourth' element={<ProjectFourth />} />
        <Route path='ProjectFifth' element={<ProjectFifth />} />
        <Route path='ProjectSixth' element={<ProjectSixth />} />
        <Route path='ProjectSeventh' element={<ProjectSeventh />} />
        <Route path='ProjectEighth' element={<ProjectEighth />} />
        <Route path='ProjectNinth' element={<ProjectNinth />} />
        <Route path='ProjectTenth' element={<ProjectTenth />} />
        <Route path='ProjectEleventh' element={<ProjectEleventh />} />
        <Route path='ProjectTwelfth' element={<ProjectTwelfth />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
