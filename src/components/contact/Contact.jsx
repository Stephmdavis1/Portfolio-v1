import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"
import { SiBuymeacoffee } from "react-icons/si"
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ctvav6d', 'service_ctvav6d', form.current, 'AUefBKppPh6Rhf6eh')

        e.target.reset()

    };

    return (
        <div className='contact__form' >
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMailOutline className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>stephmdavis1@gmail.com</h5>
                        <a href='mailto:stephmdavis1@gmail.com' target='_blank'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <FaLinkedin className='contact__option-icon' />
                        <h4>LinkedIn</h4>
                        <h5>Find me on LinkedIn</h5>
                        <a href='https://www.linkedin.com/in/stephmdavis1/' target='_blank'>Connect</a>
                    </article>

                    <article className="contact__option">
                        <SiBuymeacoffee className='contact__option-icon' />
                        <h4>Buy me a coffee</h4>
                        <h5>Thank you for your support</h5>
                        <a href='https://bmc.link/stephmdavis1' target="_blank">Support</a>
                    </article>
                </div>
                <div className='email__form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Your Full Name' required />
                        <input type="email" name='email' placeholder='Your Email' required />
                        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                        <button type='submit' className='btn btn-primary'>Send Message</button>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Contact