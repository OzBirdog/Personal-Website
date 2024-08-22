import React from 'react'
import { Button } from './Button'
import './About.css'
import image from '/src/assets/image.jpeg'

export const About = () => {
  return (
    <div className='about-container'>
        <div className="about-box">
                    <div className="box-left">
                        <img src={image} alt="image" className="box-image" />
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
                        <p className="info">My name is Oz Birdett and I recently graduated from the University of North Texas with a bachelor’s degree in computer science. What I am most passionate about is solving problems, which I’ve loved to do ever since I was a little kid building Legos.</p>
                        <p className="info">Now the Legos have been replaced with coding, but it’s just as fun and rewarding. Over the years I’ve been able to grow my problem solving skills by taking coding classes and working jobs that require quick solutions. I hope to further utilize and grow my passion for problem solving at my next career.</p>
                        <div className="buttons">
                            <Button text="Resume" className="button-resume" link="/resume"/>
                            <Button text="Projects" style={{ backgroundColor: '#2196F3', color: 'white' }} className="button-projects" link="/projects"/>
                        </div>
                    </div>
                </div>
    </div>
  )
}
