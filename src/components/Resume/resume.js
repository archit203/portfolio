import React from 'react'
import './resume.css'
import Myresume from "../../assets/Archit's Resume.pdf"
const Resume = () => {
  return (
    <section id='resume'>
        <span className='resumeTitle'>My Resume</span>
        <span className='resumeDesc'>Here is my resume, which showcases my experience, skills, certifications and achievements.</span>
        <div className='resumeDoc'>
            <iframe src={Myresume} className='resumeFrame'></iframe>
        </div>
    </section>
  )
}

export default Resume