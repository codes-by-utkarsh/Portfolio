
import React, { useState } from 'react';
import profileImg from '../assets/utkarsh.webp';

const SocialLink = ({ href, customIcon, alt, isDownload, brandColor }) => {
    const [isHovered, setIsHovered] = useState(false);
    const activeColor = brandColor || '#00ff41'; // Default theme green

    // Extract RGB from hex for background opacity
    const hex = activeColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            download={isDownload}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: isHovered ? `rgba(${r}, ${g}, ${b}, 0.1)` : 'var(--surface-color)',
                border: `1px solid ${isHovered ? activeColor : 'var(--border-color)'} `,
                transition: 'all 0.3s ease',
                transform: isHovered ? 'translateY(-3px)' : 'none',
                boxShadow: isHovered ? `0 5px 15px rgba(${r}, ${g}, ${b}, 0.2)` : 'none',
                textDecoration: 'none',
                color: isHovered ? activeColor : 'var(--text-secondary)',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            title={alt}
        >
            <div style={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {customIcon}
            </div>
        </a>
    );
};

const Hero = () => {
    // Brand Icons as Inline SVGs
    const linkedinIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
    );

    const githubIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
        </svg>
    );

    const xIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
        </svg>
    );

    const mediumIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"></path>
        </svg>
    );

    const instagramIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
    );

    const resumeIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
    );

    const socialLinks = [
        { href: "https://linkedin.com/in/0xutkarsh", customIcon: linkedinIcon, alt: "LinkedIn", brandColor: "#0a66c2" },
        { href: "https://github.com/codes-by-utkarsh", customIcon: githubIcon, alt: "GitHub" },
        { href: "https://instagram.com/_.dri.zzle._", customIcon: instagramIcon, alt: "Instagram", brandColor: "#E1306C" },
        { href: "https://x.com/u25tkarsh", customIcon: xIcon, alt: "X (Twitter)" },
        { href: "https://medium.com/@drizzlehx", customIcon: mediumIcon, alt: "Medium" },
        { href: "https://drive.google.com/file/d/18GqEYHTp0u5tqhu0cNm1B0FlRp91LdGO/view?usp=sharing", customIcon: resumeIcon, alt: "Resume", isDownload: true },
    ];

    return (
        <section className="container hero-section" style={styles.heroSection}>
            <div className="hero-content" style={styles.content}>
                <div style={styles.badge}>Security Researcher & Developer</div>
                <h1 className="hero-title" style={styles.title}>
                    Hi, I'm <span style={{ color: '#00ff41' }}>Utkarsh Srivastava</span>
                </h1>
                <h2 style={styles.subtitle}>
                    a.k.a <span style={{ fontFamily: 'var(--font-mono)', color: '#00ff41' }}>drizzlehx</span>
                </h2>
                <p style={styles.description}>
                    Offense-driven security. Defense-ready solutions.
                </p>

                <div style={styles.socials}>
                    {socialLinks.map((link, index) => (
                        <SocialLink key={index} {...link} />
                    ))}
                </div>

                <div className="hero-actions" style={styles.actions}>
                    <a href="#services" className="btn btn-primary">View Services</a>
                    <a href="#contact" className="btn">Contact Me</a>
                </div>
            </div>
            <div style={styles.imageWrapper}>
                <img src={profileImg} alt="Utkarsh Srivastava" className="hero-image" style={styles.image} />
            </div>
        </section>
    );
};

const styles = {
    heroSection: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '80px',
        gap: '4rem',
        flexWrap: 'wrap',
    },
    content: {
        flex: 1,
        minWidth: '300px',
    },
    badge: {
        display: 'inline-block',
        padding: '0.25rem 0.75rem',
        backgroundColor: 'var(--surface-hover)',
        borderRadius: '100px',
        fontSize: '0.85rem',
        marginBottom: '1.5rem',
        fontFamily: 'var(--font-mono)',
        color: 'var(--text-secondary)',
    },
    title: {
        fontSize: '3.5rem',
        fontWeight: '800',
        lineHeight: '1.1',
        marginBottom: '1rem',
        color: 'var(--text-secondary)',
    },
    subtitle: {
        fontSize: '1.5rem',
        marginBottom: '1.5rem',
        color: 'var(--text-primary)',
        fontWeight: '400',
    },
    description: {
        maxWidth: '500px',
        marginBottom: '2rem',
        color: 'var(--text-secondary)',
        fontSize: '1.1rem',
    },
    socials: {
        display: 'flex',
        gap: '1rem',
        marginBottom: '2.5rem',
    },
    actions: {
        display: 'flex',
        gap: '1rem',
    },
    imageWrapper: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        minWidth: '300px',
    },
    image: {
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        objectFit: 'cover',
        transition: 'transform 0.3s ease',
        position: 'relative',
        zIndex: 2,
        border: '2px solid var(--border-color)',
    }
};

export default Hero;
