import React from 'react'
import './contactMe.css'
import FacebookIcon from "../../assets/facebook-icon.png"
import YoutubeIcon from "../../assets/youtube.png"
import twitterIcon from "../../assets/twitter.png"
import InstagramIcon from "../../assets/instagram.png"


const ContactMe = () => {
  return (
    <section id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form action='' className='contactForm'>
            <input type='text' className='name' placeholder='Your Name'/>
            <input type='email' className='email' placeholder='Your Email'/>
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