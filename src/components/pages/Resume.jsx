import React from 'react'
import './Resume.css'

export const Resume = () => {
  return (
    <div className="container">
        <div className="resume-header">Education</div>
            <div className="resume-box">
                <div className="resume-box-left">
                    <div className="spacing"></div>
                    <p className="position">B.S. in Computer Science</p>
                    <p className="position">GPA: 3.532</p>
                    <p className="date">University of North Texas</p>
                    <p className="date">ABET Accredited</p>
                    <p className ="text">Aug 2020 -  May 2024</p>
                    <p className ="text">Denton, TX</p>
                </div>    
                <div className="resume-box-right">
                    <p className ="paragraph">While attending the University of North Texas I learned about different coding languages, including C++, SQL, JavaScript, HTML, and CSS. I also learned different coding methodologies, like Scrum, Kanban, and Waterfall, while working on various projects. </p>
                </div>
            </div>
        <div className="resume-header">Experience</div>
            <div className="resume-box">
                <div className="resume-box-left">
                    <div className="spacing"></div>
                    <p className="position">Help Desk Support</p>
                    <p className="date">EMP Manufacturing</p>
                    <p className="text">Jul 2023 - Present</p>
                    <p className="text">Coppell, TX</p>
                </div>    
                <div className="resume-box-right">
                    <p className ="paragraph">My main responsibility at EMP Manufacturing is to help employees with any IT realted issues they encounter on a daily basis. This includes installing software, adding printers, or fixing any software or Windows issues. I also do administrative duties using Azure AD, like creating logins or emails and giving access to our shared file system.</p>
                </div>
            </div>
            <div className="resume-header"></div>
            <div className="resume-box">
                <div className="resume-box-left">

                </div>
                <div className="resume-box-right">

                </div>
            </div>
    </div>
  )
}
