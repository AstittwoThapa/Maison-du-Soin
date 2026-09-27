import NavBar from "./Components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Barbers from "./Pages/Barber.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Services from "./Pages/Services.jsx";
import Footer from "./Components/Footer.jsx";
import BarberProfile from "./Pages/BarberProfile.jsx";

export default function App() {
    return (
        <>
            <NavBar title = "Maison du Soin"/> 
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/barbers" element={<Barbers/>}/>
                <Route path="/barbers/:id" element={<BarberProfile/>}/>
            </Routes>

            <Footer />
                 
        </>
    );
};