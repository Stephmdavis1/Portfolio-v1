import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../TabNav/NavBar.css"
import CV from '../../assets/cv.pdf'
import CTA from '../header/CTA'
import { RxHamburgerMenu } from 'react-icons/rx'


function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div>
                <div className="togglebutton">
                    <button onClick={() => {
                        setExpandNavbar((prev) => !prev);
                    }}
                    >
                        <RxHamburgerMenu />
                    </button>
                </div>
            </div>
            <div className='nav__links'>
                <div className='cta__link'>
                    <a href={CV} download className='btn btn-header'>Download CV</a>
                    <a href='#contact' className='btn btn-primary btn-header'>Let's Chat</a>
                </div>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                </div>
            </div >
        </div >
    );
}

export default Navbar;