import React from 'react'
import './about.css'
import ME from '../../assets/me3.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>1+ Years</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>5 Clients Worked With</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>20+ Completed Projects</small>
                        </article>
                    </div>

                    <p>As a designer I strive to strongly focus on building solutions that users actually want, and to create beautiful, functional UI's.</p><p> As a first generation JAmerican (Jamaican - American), I was raised to always value my relationships, to relentlessly pursue my dreams and desires, and to always be the hardest worker in the room. This helped me to become the person I am today. One that is terribly competitive, passionately addicted to learning, and always willing to solve any problem I can to help others. </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>

                </div>
            </div>

        </section>
    )
}

export default About