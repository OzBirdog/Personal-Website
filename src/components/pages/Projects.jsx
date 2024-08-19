import React from 'react'
import './Projects.css'
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: '/src/assets/Scrape1.jpeg',
  },
  {
    originalL: '/src/assets/Scrape2.jpeg',
  },
  {
    original: '/src/assets/Scrape3.jpeg',
  },
];


export const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-header">Projects</h1>
      <div className="projects-box">
        <div className="projects-box-left">
          <div className="spacing"></div>
        </div>
      </div>
      <div className="projects-box">
        <div className="projects-box-left">
          <div className="spacing"></div>
          <h2 className="title">Garage Sale Finder</h2>
          <p className="role">Frontend/Backend</p>
          <p className="description">Created a website over the course of two semesters that allows people to find garage sales in their area.</p>
          <p className="description">Worked on the frontend and backend for adding garage sale listings.</p>
          <h2 className="sub-title">Features:</h2>
          <ul className="c">
            <li>Map displaying garage sales</li>
            <li>List of garage sales with information</li>
            <li>Users can add and delete listings</li>
          </ul>
          <h2 className="sub-title">Software:</h2>
          <ul className="c">
            <li>JavaScript, CSS, Python, SQL</li>
            <li>React.js, Flask</li>
            <li>Google Maps API</li>
          </ul>
          <div className="spacing"></div>
        </div>
        <div className="project-right-box">
        </div>
      </div>
      <div className="projects-header"></div>
      <div className="projects-box">
        <div className="projects-box-left">
          <div className="spacing"></div>
          <h2 className="title">Mean Green Deal</h2>
          <p className="role">Frontend</p>
          <p className="description">Created a website over the course of a semester that encourage students to recycle around campus.</p>
          <p className="description">Worked on the UI design and with Google Maps API (i.e showing user location and live tracking user location).</p>
          <h2 className="sub-title">Features:</h2>
          <ul className="c">
            <li>Map displaying recycling bins around campus</li>
            <li>Users can request new bins to be added</li>
            <li>Scoreboard system that rewards points for recycling</li>
            <li>Guide on how to recycle</li>
          </ul>
          <h2 className="sub-title">Softare:</h2>
          <ul className="c">
            <li>Javascript, HTML, CSS</li>
            <li>Google Maps API, Firebase API</li>
            <li>Github Pages</li>
          </ul>
          <div className="spacing"></div>
        </div>
      </div>
      <div className="projects-header"></div>
      <div className="projects-box">
        <div className="projects-box-left">
          <div className="spacing"></div>
          <h2 className="title">Scrape My Professors</h2>
          <p className="role">Frontend</p>
          <p className="description">Created a website with a team for hackUNT 2023 that displayed visuals for grades and reviews of professors at UNT.</p>
          <p className="description">Worked with the Streamlit framework to create a UI for the website and to configure the displayed data.</p>
          <h2 className="sub-title">Features:</h2>
          <ul className="c">
            <li>Users can select a professor and course to scrape for</li>
            <li>Users can compare data from different professors</li>
            <li>Displays data in both a pie chart and bar graph</li>
          </ul>
          <h2 className="sub-title">Softare:</h2>
          <ul className="c">
            <li>Python</li>
            <li>Streamlit</li>
          </ul>
          <div className="spacing"></div>
        </div>
        <div className="projects-box-right">
        <ImageGallery 
        items={images}
        showThumbnails={true}
        showPlayButton={false}
        autoPlay={true}
        slideInterval={3000}
        originalHeight={1}
        />
        </div>
      </div>
      <div className="projects-header"></div>
      <div className="projects-box">
        <div className="projects-box-left">
          <div className="spacing"></div>
          <h2 className="title">Minus the Tutor Chatbot</h2>
          <p className="description">Created a chatbot with a team for the NSBEHack 2023 Hackathon that was designed to answer questions from various learning subjects at different grade levels.</p>
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
      </div>
      <div className="projects-header"></div>
    </div>
  )
}

