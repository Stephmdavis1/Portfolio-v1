import React from 'react'
import Header from '../components/header/Header.jsx'
import Nav from '../components/nav/Nav.jsx'
import About from '../components/about/About.jsx'
import Experience from '../components/experience/Experience.jsx'
import Portfolio from '../components/portfolio/Portfolio.jsx'
import Contact from '../components/contact/Contact.jsx'
import Footer from '../components/footer/Footer.jsx'
import Navbar from '../components/TabNav/Navbar.jsx'
import Projects from './Projects.jsx'


function Home() {
    return (
        <div>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home