import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Testimonials from './components/testimonials/Testimonials.jsx'
import Home from './pages/Home'
import Navbar from "./components/TabNav/Navbar.jsx"
import Projects from './pages/Projects'
import CV from "./assets/cv.pdf"
import SippersCoffeehouse from './pages/SippersCoffeehouse.jsx'
import InMotion from './pages/InMotion.jsx'
import StephanieMarieFitness from './pages/StephanieMarieFitness.jsx'
import WatchIt from './pages/WatchIt.jsx'





const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/SippersCoffeehouse" element={<SippersCoffeehouse />} />
                <Route path="/InMotion" element={<InMotion />} />
                <Route path="/StephanieMarieFitness" element={<StephanieMarieFitness />} />
                <Route path="/WatchIt" element={<WatchIt />} />
            </Routes>
        </Router>
    )
}


export default App;