import React from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Experience', id: 'experience', color: 'var(--accent-green)' },
    { name: 'Skills', id: 'skills', color: 'var(--accent-cyan)' },
    { name: 'Projects', id: 'projects', color: 'var(--accent-yellow)' },
    { name: 'Certifications', id: 'certifications', color: 'var(--accent-purple)' },
    { name: 'Awards', id: 'achievements', color: 'var(--accent-red)' },
    { name: 'Education', id: 'education', color: 'var(--accent-blue)' },
    { name: 'Services', id: 'services', color: 'var(--accent-grey)' },
    { name: 'Contact Me', id: 'contact', color: 'var(--accent-orange)' },
  ];

  return (
    <header style={styles.header}>
      <div className="container" style={styles.navContainer}>
        {/* We can place the top info here similar to shaivarth.com */}
        <div style={styles.topInfo}>
           <div style={styles.logo}>UTKARSH SRIVASTAVA [DRIZZLEHX] | SECURITY RESEARCHER & DEVELOPER</div>
           <div style={styles.status}>STATUS: <span style={{color: 'var(--accent-green)'}}>ONLINE</span></div>
        </div>

        <div className="hamburger" onClick={toggleMenu} style={{position: 'absolute', right: '2rem', top: '1.5rem'}}>
          <span className={isOpen ? "bar active" : "bar"}></span>
          <span className={isOpen ? "bar active" : "bar"}></span>
          <span className={isOpen ? "bar active" : "bar"}></span>
        </div>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`} style={styles.navWrapper}>
          <ul style={{ ...styles.navList, flexDirection: isOpen ? 'column' : 'row' }}>
            {navItems.map((item, index) => (
               <li 
                 key={index}
                 style={{
                   ...styles.navItem,
                   borderColor: hoveredIndex === index ? item.color : 'var(--border-color)',
                   color: hoveredIndex === index ? item.color : 'var(--text-secondary)',
                 }}
                 onMouseEnter={() => setHoveredIndex(index)}
                 onMouseLeave={() => setHoveredIndex(null)}
                 onClick={() => scrollToSection(item.id)}
               >
                 {item.name.toUpperCase()}
               </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    padding: '0',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(11, 12, 16, 0.95)',
    backdropFilter: 'blur(5px)',
    zIndex: 1000,
    borderBottom: '1px solid var(--border-color)',
  },
  navContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  topInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 0',
    borderBottom: '1px solid var(--border-color)',
    fontSize: '0.85rem',
    color: 'var(--accent-yellow)',
    fontFamily: 'var(--font-mono)',
  },
  logo: {
    fontWeight: 'normal',
    letterSpacing: '0.05em',
  },
  status: {
    color: 'var(--text-secondary)',
  },
  navWrapper: {
    width: '100%',
  },
  navList: {
    display: 'flex',
    alignItems: 'stretch',
    width: '100%',
  },
  navItem: {
    flex: 1,
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 'normal',
    padding: '0.75rem 0',
    borderRight: '1px solid var(--border-color)',
    borderBottom: '2px solid transparent',
    transition: 'all 0.2s ease',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  }
};

export default Header;
