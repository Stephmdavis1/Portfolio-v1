import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.png'
import HeaderSocial from './HeaderSocials'
import Typewriters from './typewriter/Typewriter'
import Text_Change from './Text_Change/Text_Change'
// import DarktoLight from './DarktoLight'



const Header = () => {
    return (
        <header>
            <h1 className="title__container">Stephanie Davis</h1>
            <div className="container header__container">

                {/* <h5 class="text-light">I am a </h5> */}

                <HeaderSocial />

                {/* <div className='me'>
                    <img src={ME} alt="me" />
                </div> */}
                <Typewriters />
                {/* <Text_Change /> */}
                <a href="#contact" className='scroll__down'>Scroll Down</a>
                {/* <DarktoLight /> */}
            </div>

        </header>
    )
}

export default Header