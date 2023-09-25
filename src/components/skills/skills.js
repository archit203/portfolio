import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>My Skills</span>
        <span className='skillDesc'>• Languages: C, C++, Java, Python, R, Javascript, Typescript <br />• Databases: PostgreSQL, MySQL, MongoDB<br/>• UI Framework/Technologies : CSS, HTML, Bootstrap, Javascript,
ReactJs, NextJs, Tailwind<br/>• Other skills: Data Structures and Algorithms, Object Oriented
Programming systems(OOPs), Computer Networking, Artificial
Intelligence, Operating Systems, DBMS, Machine Learning, Deep
Learning, Software Development, Github<br />• Soft Skills: Leadership, Communication, Time- management, Critical
thinking, Network-building, Creative thinking </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX Desgin</h2>
                    <p>UI/UX design optimizes user experience through intuitive, visually pleasing interfaces.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>Website design combines aesthetics and functionality for an engaging online presence.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>App design seamlessly blends aesthetics and usability for optimal user engagement.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills