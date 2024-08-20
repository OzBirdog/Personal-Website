import { useState } from 'react'
import { Route, Routes, HashRouter } from 'react-router-dom'
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
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
    </div>
  )
}

export default App
