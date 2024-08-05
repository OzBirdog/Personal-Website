import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { About } from './components/pages/About'
import { Contact } from './components/pages/Contact'
import { Home } from './components/pages/Home'
import { Projects } from './components/pages/Projects'
import { Resume } from './components/pages/Resume'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/personal-website/about" element={<About />} />
        <Route path="/personal-website/contact" element={<Contact />} />
        <Route path="/personal-website/projects" element={<Projects />} />
        <Route path="/personal-website/resume" element={<Resume />} />
      </Routes>
    </div>
  )
}

export default App
