import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    
        <header id="header" className="d-flex flex-column justify-content-center">
  <nav id="navbar" className="navbar nav-menu">
    <ul>
      <li>
        <Link to="/" className="nav-link scrollto active">
          <i className="bx bx-home" /> <span>Home</span>
        </Link>
      </li>
      <li>
        <Link to="/About" className="nav-link scrollto">
          <i className="bx bx-user" /> <span>About</span>
        </Link>
      </li>
      <li>
        <Link to="/Resume" className="nav-link scrollto">
          <i className="bx bx-file-blank" /> <span>Resume</span>
        </Link>
      </li>
      <li>
        <Link to="/Portfolio_sec" className="nav-link scrollto">
          <i className="bx bx-book-content" /> <span>Portfolio</span>
        </Link>
      </li>
      <li>
        <Link to="/Skills" className="nav-link scrollto">
          <i className="bx bx-server" /> <span>Skills</span>
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav-link scrollto">
          <i className="bx bx-envelope" /> <span>Contact</span>
        </Link>
      </li>
    </ul>
  </nav>
  {/* .nav-menu */}
        </header>

   
  )
}
