import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <div className="exp__contain">
            <section id='experience'>
                <h5 className="exp__seperate-header">What Skills I have</h5>
                <h2>My Experience</h2>

                <div className="container experience__container">
                    {/* /*  UX Experience */}
                    <div className="experience__ux">
                        <h3>UX Design</h3>
                        <div className="experience__content">
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>User Research</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>Wireframing</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>Prototyping</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>Design Tools</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>UI Design</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>A/B Testing</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>Information Architecture</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>Interaction Design</h4>

                                </div>
                            </article>
                        </div>
                    </div>

                    {/* /* ======= FrontEnd Development ========*/}
                    <div className="experience__frontend">
                        <h3>Frontend Development</h3>
                        <div className="experience__content">
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>HTML</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>CSS</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>JavaScript</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>Bootstrap</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>Tailwind</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>Express</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>React</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>Vite</h4>

                                </div>
                            </article>
                        </div>
                    </div>

                    {/* // ======= Backend Development ========// */}
                    <div className="experience__backend">
                        <h3>Backend Development</h3>
                        <div className="experience__content">
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>Node JS</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>PHP</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>MongoDB</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>MySQL</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>Python</h4>

                                </div>
                            </article>
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>Ruby</h4>

                                </div>
                            </article>
                        </div>
                    </div>
                </div >
            </section >
        </div >
    )
}

export default Experience