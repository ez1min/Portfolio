
import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(o => !o);
    const handleLinkClick = () => setOpen(false);

    return (
        <header className="navbar">
            <div className="nav-container">
                {/* 로고 클릭 시 맨 위로 스크롤 */}
                <a href="#" className="nav-logo" onClick={handleLinkClick}>
                    Jimin's Portfolio
                </a>

                {/* 토글 버튼 */}
                <button className="nav-toggle" onClick={handleClick}>
                    <span className="hamburger" />
                </button>

                {/* 앵커 링크로 섹션 이동 */}
                <nav className={`nav-menu ${open ? 'active' : ''}`}>
                    <a href="#aboutme" className="nav-item" onClick={handleLinkClick}>
                        About
                    </a>
                    <a href="#skills" className="nav-item" onClick={handleLinkClick}>
                        Skills
                    </a>
                    <a href="#projects" className="nav-item" onClick={handleLinkClick}>
                        Projects
                    </a>

                </nav>
            </div>
        </header>
    );
}
