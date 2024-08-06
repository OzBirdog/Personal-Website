import React from 'react'
import './Resume.css'

export const Resume = () => {
  return (
    <div className="container">
        <p className="resume-header">Education</p>
            <div className="resume-box">
                <div className="resume-box-left">
                    <p className="position">B.S. in Computer Science</p>
                    <p className="position">GPA: 3.532</p>
                    <p className="date">University of North Texas</p>
                    <p className="date">ABET Accredited</p>
                    <p className ="text">2020 - 2024</p>
                    <p className ="text">Denton, TX</p>
                </div>    
                <div className="resume-box-right">
                    <p className ="paragraph">I attended the Univeristy of North Texas from August of 2020 to May of 2024, where I received a Bachelor's Degree in Computer Science.</p>
                </div>
            </div>
        <p className="resume-header">Experience</p>
            <div className="resume-box">    
            </div>
    </div>
  )
}
