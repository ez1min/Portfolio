import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <header className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo" >포폴</Link>

                <button className="nav-toggle" onClick={() => setOpen(o => !o)}>
                    <span className="hamburger" />
                </button>

                <nav className={`nav-menu ${open ? 'active' : ''}`}>
                    {/* <Link to="/" className="nav-item" onClick={() => setOpen(false)}>Home</Link> */}
                    <Link to="/about" className="nav-item" onClick={() => setOpen(false)}>About</Link>
                    <Link to="/projects" className="nav-item" onClick={() => setOpen(false)}>Projects</Link>
                    <Link to="/contact" className="nav-item" onClick={() => setOpen(false)}>Contact</Link>
                </nav>
            </div>
        </header>
    )
}
