import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id='intro' >
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='intoText'>I'm <span className='introName'>Archit</span> <br />Web Developer</span>
            <p className='introPara'>A passionate web developer with a knack for crafting dynamic<br /> and user-friendly digital experiences. Proficient in a range <br />of front-end and back-end technologies, dedicated to creating <br /> seamless, visually appealing websites.</p>
            <Link><button className='btn'><img src={btnImg} alt='' className='btnImg'/>Hire me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro