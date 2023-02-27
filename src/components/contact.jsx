import React from "react";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import { EmailJS } from '../../config.json';


const Contact = () => {

    const [loading, setLoading] = useState(false)
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.init(EmailJS.publicKey);
        emailjs
            .sendForm(
                EmailJS.serviceID,
                EmailJS.templateID,
                refForm.current,
                setLoading(true)
            )
            .then(
                () => {
                    setLoading(false)
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message, please try again!')
                }
            )
    }

    return (
        <section id='contact' className="contact-page">
            <h2 className="section-heading l-t"><span className="g-t">04.</span>Contact me</h2>
            <p className="d-t">I'm currently interested in any fresher developer positions. However if you have other request or question, contact me using the form below. </p>
            <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                    <li className='half'>
                        <input type="text" name='name' placeholder='Name' required />
                    </li>
                    <li className='half'>
                        <input type="email" name='email' placeholder='Email' required />
                    </li>
                    <li>
                        <input type='text' name='subject' placeholder='Subject' />
                    </li>
                    <li>
                        <textarea placeholder='Message' name='message' required></textarea>
                    </li>
                    <li>
                        <input type='submit' className='flat-button g-t hover btn-hover' value={loading? 'Sending...': 'Send'} />
                    </li>
                </ul>
            </form>
        </section>
    )
};

export default Contact;