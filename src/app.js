import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/home';
import Navbar from './Components/navbar';
import WhoIsMe from './Pages/whoisme';
import Resume from './Pages/resume';
import Project from './Pages/projects';
import AboutMe from './Pages/aboutMe';
import Footer from './Components/footer';

const App = () => {
    return (
        <>
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/me' element={<WhoIsMe />} />
                <Route path='/cv' element={<Resume />} />
                <Route path='/projects' element={<Project />} />
                <Route path='/aboutme' element={<AboutMe />} />
            </Routes>
            <Footer />
        </BrowserRouter>
        </>
    );
}
 
export default App;