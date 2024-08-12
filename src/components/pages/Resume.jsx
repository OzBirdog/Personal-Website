import React from 'react'
import './Resume.css'

export const Resume = () => {
  return (
    <div className="container">
        <div className="resume-header3">Education</div>
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
        <div className="resume-header2">Skills</div>
            <div className="resume-box">
                <div className="resume-box-left">
                    <div className="spacing"></div>
                    <p className="position">Programming Languages:</p>
                    <ul className="a">
                        <li>C/C++ (Interm.)</li>
                        <li>JavaScript (Interm.)</li>
                        <li>HTML (Interm.)</li>
                        <li>CSS (Interm.)</li>
                        <li>Java (Interm.)</li>
                        <li>Python (Interm.)</li>
                        <li>SQL (Beg.)</li>
                    </ul>
                    <div className="spacing"></div>
                    <p className="position">Frameworks:</p>
                    <ul className="a">
                        <li>React.js (Interm.)</li>
                        <li>Streamlit (Interm.)</li>
                        <li>Flask (Beg.)</li>
                    </ul>
                    <div className="spacing3"></div>
                </div>
                <div className="resume-box-right">
                    <div className="spacing"></div>
                    <p className="position">Software:</p>
                    <ul className="a">
                        <li>Visual Studio</li>
                        <li>Putty</li>
                        <li>MobaXTerm</li>
                        <li>Microsoft Office Suit</li>
                        <li>Microsoft Admin Center</li>
                        <li>Microsoft Active Directory</li>
                        <li>Microsoft Azure AD</li>
                    </ul>
                    <div className="spacing"></div>
                    <p className="position">Operating Systems:</p>
                    <ul className="a">
                        <li>Windows</li>
                        <li>MacOS</li>
                    </ul>
                    <div className="spacing"></div>
                    <div className="spacing2"></div>
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
                    <div className="spacing"></div>
                    <p className="position">Brand Ambassador</p>
                    <p className="date">Amped Up Marketing</p>
                    <p className="text">Nov 2021 - Oct 2023</p>
                    <p className="text">DFW Metroplex</p>
                </div>
                <div className="resume-box-right">
                    <p className="paragraph">As a Brand Ambassador, I would represent Honda at community and volunteer invents across the Dallas-Fort Worth Metroplex. At these events I would interact with the public by handing out merchandise and taking photos with them, with the ultimate goal of improving Honda's image.</p>
                </div>
            </div>
            <div className="resume-header"></div>
            <div className="resume-box">
                <div className="resume-box-left">
                    <div className="spacing"></div>
                    <p className="position">Seasonal Operations Assistant</p>
                    <p className="date">American Campus Communities</p>
                    <p className="text">Jul 2022 - Aug 2022,</p>
                    <p className="text">Jul 2023 - Aug 2023</p>
                    <p className="text">Denton, TX</p>
                </div>
                <div className="resume-box-right">
                    <p className="paragraph">Assisted in preparing the apartments for new residents by looking for broken or missing items and either fixing or repairing them. Once residents started moving in, I would resolve any maintance issues they had.   </p>
                </div>
            </div>
            <div className="resume-header"></div>
            <div className="resume-box">
                <div className="resume-box-left">
                    <div className="spacing"></div>
                    <p className="position">Player Assistant</p>
                    <p className="date">Whitestone Golf Club</p>
                    <p className="text">Mar 2019 - Jun 2021</p>
                    <p className="text">Benbrook, TX</p>
                </div>
                <div className="resume-box-right">
                    <p className="paragraph">Started out working outside as an outside lead, where I had to maintain 80 golf carts throughout the day. A year later I was promoted to the Pro-Shop, which included customer service, running the register, managing the outside workers, and closing at the end of the day. </p>
                </div>
            </div>
    </div>
  )
}
