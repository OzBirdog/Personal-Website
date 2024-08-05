import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import "./Navbar.css"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return <nav>
        <Link to="/" className="title">Oz Birdett</Link>
        <div className="menu" onClick={() => {
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to="/about">About Me</NavLink>
            </li>
            <li>
                <NavLink to="/resume">Resume</NavLink>
            </li>
            <li>
                <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact Me</NavLink>
            </li>
        </ul>
    </nav>
}
