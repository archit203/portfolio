import React from 'react'
import './works.css'
import airbnb from '../../assets/airbnb.png'
import marketPredictor from '../../assets/market-predictor.png'

const Works = () => {
  return (
    <section id='works'>
        <span className='worksTitle'>My Portfolio</span>
        <span className='worksDesc'>"I take pride in paying attention to the smallest details and making sure that my work is excellent. I am exicted to bring my skills and experience to help business achieve their goals and create a strong online presence"</span>
        <div className='worksBars'>
            <div className='worksBar'>
                <a href='https://ab-clone-archit241001-gmailcom.vercel.app/'><img src={airbnb} alt='airbnb' className='worksBarImg'/></a>
                <div className='worksBarText'>
                    <h2>Airbnb Clone</h2>
                    <p>Works like Airbnb , user can add , delete properties and also can book property for visiting purpose.<br />Techstack : reactjs, typescript, mongodb, Tailwind.</p>
                </div>
            </div>
            <div className='worksBar'>
                <a href='https://stock-market-predictor-archit.streamlit.app/'><img src={marketPredictor} alt='marketPredictor' className='worksBarImg'/></a>
                <div className='worksBarText'>
                    <h2>Stock Trend Predictor</h2>
                    <p>Implemented Deep Learning model that can predict the market trend, it is based on data available till august 2023. <br />Trend prediction accuracy upto 90% .</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Works