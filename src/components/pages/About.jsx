import React from 'react'
import { Button } from './Button'
import './About.css'


export const About = () => {
  return (
    <div className='about-container'>
        <div className="about-box">
                    <div className="box-left">
                        <img src="public/assets/image.jpeg" alt="image" className="box-image" />
                        <div className="box-left-title">
                            <p>Oz Birdett</p>
                        </div>
                        <div className="box-left-title-mobile">
                            <p>Welcome</p>
                        </div>
                        <div className="box-left-text">
                            <p className="spacing">B.S in Computer Science</p>
                            <p>Seeking Employment</p>
                            <p>in Software Development</p>
                        </div>
                    </div>
                    <div className="box-right">
                        <div className="typing">
                            <p className="typing-text">Hello</p>
                        </div>
                        <p className="header">Here's my experience</p>
                        <div className="buttons">
                            <Button text="Resume" className="button-resume" link="/resume"/>
                            <Button text="Projects" style={{ backgroundColor: '#2196F3', color: 'white' }} className="button-projects"/>
                        </div>
                    </div>
                </div>
    </div>
  )
}
