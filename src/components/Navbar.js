import React from 'react'
import { Link } from 'react-router-dom';  
import './css/Navbar.css';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">  
                    <Link to="/" className="navbar-logo">
                        <img src={process.env.PUBLIC_URL+"/img/logo.png"} alt="Logo" className="logo-image" /> 
                        <span className="logo-text">Let’sTalk</span>
                    </Link>
                    <ul className="nav-menu">
                        <li><Link to="/features">Features</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/premium">Premium</Link></li>
                        <li><Link to="/app">App</Link></li>
                    </ul>                 
                    <button className="get-started-btn">
                        <span className="started-btn-text">Get Started</span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
