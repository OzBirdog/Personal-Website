import React from 'react'
import './Projects.css'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Scrape1 from '/src/assets/Scrape1.png'
import Scrape2 from '/src/assets/Scrape2.png'
import Scrape3 from '/src/assets/Scrape3.png'
import Recycle1 from '/src/assets/Recycle1.png'
import Recycle2 from '/src/assets/Recycle2.png'
import Recycle3 from '/src/assets/Recycle3.png'
import Recycle4 from '/src/assets/Recycle4.png'
import Minus1 from '/src/assets/Minus1.png'
import Minus2 from '/src/assets/Minus2.png'
import Minus3 from '/src/assets/Minus3.png'
import Minus4 from '/src/assets/Minus4.png'
import Garage1 from '/src/assets/Garage1.png'
import Garage2 from '/src/assets/Garage2.png'
import Garage3 from '/src/assets/Garage3.png'
import Garage4 from '/src/assets/Garage4.png'
import Garage5 from '/src/assets/Garage5.png'
import Garage6 from '/src/assets/Garage6.png'
import Garage7 from '/src/assets/Garage7.png'

const scrape = [
  {
    original: Scrape1,
  },
  {
    original: Scrape2,
  },
  {
    original: Scrape3,
  },
];

const recycle = [
  {
    original: Recycle1,
  },
  {
    original: Recycle2,
  },
  {
    original: Recycle3,
  },
  {
    original: Recycle4,
  },
]

const minus = [
  {
    original: Minus1,
  },
  {
    original: Minus2,
  },
  {
    original: Minus3,
  },
  {
    original: Minus4,
  },
]

const garage = [
  {
    original: Garage1,
  },
  {
    original: Garage2,
  },
  {
    original: Garage3,
  },
  {
    original: Garage4,
  },
  {
    original: Garage5,
  },
  {
    original: Garage6,
  },
  {
    original: Garage7,
  },
]


export const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-header">Projects</h1>
      <div className="projects-box">
        <div className="projects-box-left">
          <div className="spacing"></div>
          <h2 className="title">Portfolio Website</h2>
          <a href="https://github.com/OzBirdog/Personal-Website" className="link" target="_blank" rel="noopener noreferrer">
            <p className="role">Visit GitHub</p>
          </a>
          <p className="role">Frontend</p>
          <p className="description">Created a website over the course of a few weeks that allows people to view my portfolio easily.</p>
          <p className="description">Coded the whole website using React.js.</p>
          <h2 className="sub-title">Features:</h2>
          <ul className="c">
            <li>Resume page showcasing experience</li>
            <li>Project page with interactive gallery</li>
            <li>Contact page for users to reach out</li>
          </ul>
          <h2 className="sub-title">Software:</h2>
          <ul className="c">
            <li>JavaScript, CSS</li>
            <li>React.js</li>
            <li>Github Pages</li>
          </ul>
          <div className="spacing"></div>
        </div>
        <div className="projects-box-right">
          <div className="portfolio-spacing"></div>
          <p className="sub-title">You're on the project right now!</p>
          <div className="portfolio-spacing"></div>
        </div>
      </div>
      <div className="projects-spacing5"></div>
      <div className="projects-box">
        <div className="projects-box-left">
          <div className="spacing"></div>
          <h2 className="title">Garage Sale Finder</h2> 
          <a href="https://github.com/eagle-garage-sale/Garage_Sale_Finder" className="link" target="_blank" rel="noopener noreferrer">
            <p className="role">Visit Github</p>
          </a>
          <p className="role">Frontend/Backend</p>
          <p className="description">Created a website over the course of two semesters that allows people to find garage sales in their area.</p>
          <p className="description">Worked on the frontend and backend for adding garage sale listings.</p>
          <h2 className="sub-title">Features:</h2>
          <ul className="c">
            <li>Users can create and login into an account</li>
            <li>Users can add, edit, and delete listings</li>
            <li>Map displaying garage sales and the user</li>
            <li>List of garage sales with information</li>
            <li>Each listing has tags, which can be searched for</li>
            <li>Users can get directions to garage sales</li>
          </ul>
          <h2 className="sub-title">Software:</h2>
          <ul className="c">
            <li>JavaScript, CSS, Python, SQL</li>
            <li>React.js, Flask</li>
            <li>Google Maps API</li>
          </ul>
          <div className="spacing"></div>
        </div>
        <div className="projects-box-right">
          <div className="image-gallery-wrapper">
            <ImageGallery items={garage} showPlayButton={false}/>
          </div> 
        </div>
      </div>
      <div className="projects-spacing"></div>
      <div className="projects-box">
        <div className="projects-box-left">
          <div className="spacing"></div>
          <h2 className="title">Mean Green Deal</h2>
          <a href="https://mean-green-deal.github.io/" className="link" target="_blank" rel="noopener noreferrer">
            <p className="role">Visit Website</p>
          </a>
          <p className="role">Frontend</p>
          <p className="description">Created a website over the course of a semester that encourage students to recycle around campus.</p>
          <p className="description">Worked on the UI design and with Google Maps API (i.e showing user location and live tracking user location).</p>
          <h2 className="sub-title">Features:</h2>
          <ul className="c">
            <li>Map displaying recycling bins around campus</li>
            <li>Users can request new bins to be added</li>
            <li>Scoreboard system that rewards points for recycling</li>
            <li>Guides on how to recycle and get involved</li>
            <li>Contact page for users to reach out</li>
          </ul>
          <h2 className="sub-title">Softare:</h2>
          <ul className="c">
            <li>Javascript, HTML, CSS</li>
            <li>Google Maps API, Firebase API</li>
            <li>Github Pages</li>
          </ul>
          <div className="spacing"></div>
        </div>
        <div className="projects-box-right">
          <div className="image-gallery-wrapper">
            <ImageGallery items={recycle} showThumbnails={false} showPlayButton={false}/>
          </div> 
        </div>
      </div>
      <div className="projects-spacing2"></div>
      <div className="projects-box">
        <div className="projects-box-left">
          <div className="spacing"></div>
          <h2 className="title">Scrape My Professors</h2>
          <a href="https://scrapemyprofs.streamlit.app/" className="link" target="_blank" rel="noopener noreferrer">
            <p className="role">Visit Website</p>
          </a>
          <p className="role">Frontend</p>
          <p className="description">Created a website with a team for hackUNT 2023 that displayed visuals for grades and reviews of professors at UNT.</p>
          <p className="description">Worked with the Streamlit framework to create a UI for the website and to configure the displayed data.</p>
          <h2 className="sub-title">Features:</h2>
          <ul className="c">
            <li>Users can select a professor and course to scrape for</li>
            <li>Users can compare data from different professors</li>
            <li>Displays data in both a pie chart and bar graph</li>
          </ul>
          <h2 className="sub-title">Software:</h2>
          <ul className="c">
            <li>Python</li>
            <li>Streamlit</li>
          </ul>
          <div className="spacing"></div>
        </div>
        <div className="projects-box-right">
         <div className="image-gallery-wrapper">
          <ImageGallery items={scrape} showThumbnails={false} showPlayButton={false}/>
          </div> 
        </div>
      </div>
      <div className="projects-spacing3"></div>
      <div className="projects-box">
        <div className="projects-box-left">
          <div className="spacing"></div>
          <h2 className="title">Minus the Tutor Chatbot</h2>
          <a href="https://devpost.com/software/minus-the-tutor-chatbot" className="link" target="_blank" rel="noopener noreferrer">
            <p className="role">Visit DevPost</p>
          </a>
          <p className="description">Created a chatbot with a team for the NSBEHack 2023 Hackathon that was designed to answer questions from various learning subjects at different grade levels.</p>
          <p className="description">Won the Google Vertex AI challenge, as well as 2nd place at the NSBEHack 2023</p>
          <p className="description">Worked on the code for the AI and designed the UI and layout of the app.</p>
          <h2 className="sub-title">Features:</h2>
          <ul className="c">
            <li>User can select from Elementary School to High School</li>
            <li>User can choose one of the four main subjects</li>
            <li>Displayed response is tailored to the subject and grade level</li>
          </ul>
          <h2 className="sub-title">Software:</h2>
          <ul className="c">
            <li>Python</li>
            <li>CustomTkinter</li>
            <li>Google Vertex API</li>
          </ul>
          <div className="spacing"></div>
        </div>
        <div className="projects-box-right">
                   <div className="image-gallery-wrapper">
          <ImageGallery items={minus} showThumbnails={false} showPlayButton={false}/>
          </div> 
        </div>
      </div>
      <div className="projects-spacing4"></div>
    </div>
  )
}

