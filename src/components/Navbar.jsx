import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container navwrap">
        <a className="brand" href="#home" onClick={handleNavClick}>
          <span className="mark brand-avatar-wrap">
            <img src="/logo.png" alt="Salim Mohamed Mwamkoba" className="brand-avatar-img" />
          </span>
          <div className="brand-text">
            <span className="brand-name">Salim Mwamkoba</span>
            <span className="brand-role">Software Developer</span>
          </div>
        </a>

        <div className="nav-right">
          <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
            <a href="#about" onClick={handleNavClick}>About</a>
            <a href="#projects" onClick={handleNavClick}>Projects</a>
            <a href="#skills" onClick={handleNavClick}>Tech Stack</a>
            <a href="#experience" onClick={handleNavClick}>Experience</a>
            <a href="#impact" onClick={handleNavClick}>Eco Impact</a>
            <a href="#contact" onClick={handleNavClick}>Contact</a>
          </nav>

          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
