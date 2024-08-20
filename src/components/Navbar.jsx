import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import "./Navbar.css"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleLinkClick = () => {
        setMenuOpen(false);
    }

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
                <NavLink to="/" onClick={handleLinkClick}>About Me</NavLink>
            </li>
            <li>
                <NavLink to="/resume" onClick={handleLinkClick}>Resume</NavLink>
            </li>
            <li>
                <NavLink to="/projects" onClick={handleLinkClick}>Projects</NavLink>
            </li>
            <li>
                <NavLink to="/contact" onClick={handleLinkClick}>Contact Me</NavLink>
            </li>
        </ul>
    </nav>
}
