import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header style={styles.header}>
      <div className="container" style={styles.navContainer}>
        <div style={styles.logo}>Utkarsh Srivastava</div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav>
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`} style={window.innerWidth > 768 ? styles.navList : {}}>
            <li style={styles.navItem} onClick={() => scrollToSection('experience')}>Experience</li>
            <li style={styles.navItem} onClick={() => scrollToSection('skills')}>Skills</li>
            <li style={styles.navItem} onClick={() => scrollToSection('projects')}>Projects</li>
            <li style={styles.navItem} onClick={() => scrollToSection('certifications')}>Certifications</li>
            <li style={styles.navItem} onClick={() => scrollToSection('achievements')}>Awards</li>
            <li style={styles.navItem} onClick={() => scrollToSection('education')}>Education</li>
            <li style={styles.navItem} onClick={() => scrollToSection('services')}>Services</li>
            <li style={styles.navItem} onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    padding: '1.5rem 0',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(5, 5, 5, 0.9)',
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
    borderBottom: '1px solid var(--border-color)',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'var(--font-mono)',
    fontWeight: '700',
    fontSize: '1.2rem',
    letterSpacing: '-0.05em',
  },
  navList: {
    display: 'flex',
    gap: '2rem',
  },
  navItem: {
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    listStyle: 'none',
  }
};

export default Header;
