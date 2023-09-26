import React, { useRef } from 'react'
import './contactMe.css'
import FacebookIcon from "../../assets/facebook-icon.png"
import YoutubeIcon from "../../assets/youtube.png"
import twitterIcon from "../../assets/twitter.png"
import InstagramIcon from "../../assets/instagram.png"
import emailjs from '@emailjs/browser';


const ContactMe = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6re4df7', 'template_v7j4v3l', form.current, 'VoAGfBa-sbT06vZaj')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert("Email Sent!")
            }, (error) => {
                console.log(error.text);
            });
      };
    return (
        <section id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='from_name'/>
                <input type='email' className='email' placeholder='Your Email'name='from_email'/>
                <textarea name='message' rows={5} placeholder='Your Message' className='msg'></textarea>
                <button className='submitBtn' type='submit' value='send'>submit</button>
                <div className='links'>
                <img src={FacebookIcon} alt='FacebookIcon' className='link'/>
                <img src={YoutubeIcon} alt='YoutubeIcon' className='link'/>
                <img src={twitterIcon} alt='twitterIcon' className='link'/>
                <img src={InstagramIcon} alt='InstagramIcon' className='link'/>
                </div>
            </form>
        </section>
    )
}

export default ContactMe