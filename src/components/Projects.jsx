import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            style={{
                ...styles.card,
                transform: isHovered ? 'translateY(-10px)' : 'none',
                borderColor: isHovered ? '#00ff41' : 'var(--border-color)',
                boxShadow: isHovered ? '0 10px 30px -10px rgba(0, 255, 65, 0.15)' : 'none'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={styles.cardHeader}>
                <div style={styles.typeBadge}>{project.type}</div>
                <span style={styles.period}>{project.period}</span>
            </div>

            <h3 style={styles.projectTitle}>
                {project.title}
                {project.subtitle && <span style={styles.subtitle}> - {project.subtitle}</span>}
            </h3>

            <p style={{
                ...styles.description,
                WebkitLineClamp: isExpanded ? 'unset' : '4',
                marginBottom: project.bullets ? '1rem' : 'auto'
            }}>
                {project.description}
            </p>

            {isExpanded && project.bullets && (
                <div style={styles.expandedContent}>
                    <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Key Responsibilities & Achievements:</span>
                    <ul style={styles.expandedList}>
                        {project.bullets.map((b, i) => <li key={i} style={styles.listItem}>{b}</li>)}
                    </ul>
                </div>
            )}

            {isExpanded && project.impact && (
                <div style={styles.expandedContent}>
                    <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Impact:</span>
                    <ul style={styles.expandedList}>
                        {project.impact.map((imp, i) => <li key={i} style={styles.listItem}>{imp}</li>)}
                    </ul>
                </div>
            )}

            {(project.bullets) && (
                <span
                    style={{
                        ...styles.readMoreBtn,
                        marginBottom: 'auto'
                    }}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? 'View Less ↑' : 'Read Details ↓'}
                </span>
            )}

            <div style={styles.skillsContainer}>
                {project.skills.map((skill, i) => (
                    <span key={i} style={styles.skillTag}>{skill}</span>
                ))}
            </div>

            <div style={styles.linksContainer}>
                {project.links ? (
                    project.links.map((link, i) => (
                        <a key={i} href={link.url} className="project-link" style={styles.link} target="_blank" rel="noopener noreferrer">
                            {link.text}
                        </a>
                    ))
                ) : (
                    <a href={project.link} className="project-link" style={styles.link} target="_blank" rel="noopener noreferrer">
                        {project.linkText}
                    </a>
                )}
            </div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: 'WatchDog',
            period: 'Jan 2026',
            description: 'A lightweight, hidden background service that captures photos of intruders attempting to access your Windows laptop with wrong passwords. Plus, a remote command center controlled via Telegram.',
            skills: ['Python', 'Dark Pattern', 'Windows API', 'Cybersecurity', 'Telegram Bot'],
            type: 'Defensive Tool',
            links: [
                { url: 'https://github.com/codes-by-utkarsh/WatchDog', text: 'GitHub Repo' },
                { url: 'https://watchdog.0xutkarsh.tech/', text: 'Download Link' },
                { url: 'https://medium.com/@drizzlehx/catch-me-if-you-can-building-an-offensive-anti-theft-system-for-windows-58e65fc4c672', text: 'Read Blog' }
            ]
        },
        {
            title: 'trueSight',
            period: 'Sep 2025',
            description: 'Advanced Hoax Threat Detection & Analysis System. A sophisticated AI-powered system for detecting and analyzing potential bomb threats across multiple communication channels. Built with modern web technologies and designed for production deployment.',
            skills: ['Node.js', 'Express.js', 'LLMs', 'Tailwind', 'React.js'],
            type: 'AI Security',
            link: 'http://truesight.0xutkarsh.tech/',
            linkText: 'Website Link'
        },
        {
            title: 'VAAUL',
            subtitle: 'Vulnerability Assessment Automation Using LLM',
            period: 'May 2025 - Jul 2025',
            description: 'Command-line tool that automates vulnerability assessment by integrating traditional network scanning/domain scanning with LLMs. Generates contextualized vulnerability analysis and remediation suggestions from scan results.',
            skills: ['Network Security', 'Web Security', 'Python', 'LLMs'],
            type: 'Automation Tool',
            links: [
                { url: 'https://github.com/codes-by-utkarsh/VAAUL-Vulnerability-Assessment-Automation-Using-LLM', text: 'Visit CLI Tool' },
                { url: 'https://medium.com/@drizzlehx/vaaul-vulnerability-assessment-automation-using-llms-d9c17070f529', text: 'Read Blog' }
            ]
        },
        {
            title: 'LinkHijackScanner',
            period: 'Open Source',
            description: 'A Python-based Social Media Broken Link Scanner that crawls a given website, extracts social media profile links, and verifies if they are valid to prevent takeover attacks.',
            skills: ['Python', 'Web Crawling', 'OSINT'],
            type: 'Scanner Tool',
            link: 'https://github.com/codes-by-utkarsh/LinkHijackScanner',
            linkText: 'View Tool'
        },
        {
            title: 'SafeLock',
            period: 'Mar 2025',
            description: 'Robust, user-centric encryption app designed to address modern privacy concerns. Securely stores files and shares access without compromising security using AES-256 encryption and Key authentication.',
            skills: ['Python', 'MySQL', 'Encryption', 'Cryptography'],
            type: 'Privacy Tool',
            links: [
                { url: 'https://github.com/codes-by-utkarsh/SafeLock', text: 'View Project' }
            ]
        }
    ];

    return (
        <section id="projects" className="section container">
            <h2 className="title">Featured Projects</h2>

            <div className="grid-responsive" style={styles.grid}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '2rem',
    },
    card: {
        backgroundColor: 'var(--surface-color)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
        cursor: 'default',
        minHeight: '400px', // Uniform height
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem',
    },
    typeBadge: {
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        color: '#00ff41',
        border: '1px solid #00ff41',
        padding: '0.25rem 0.75rem',
        borderRadius: '100px',
        fontWeight: '600',
    },
    period: {
        fontSize: '0.85rem',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-mono)',
    },
    projectTitle: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
        color: 'var(--text-primary)',
        lineHeight: '1.3',
    },
    subtitle: {
        fontSize: '1rem',
        color: 'var(--text-secondary)',
        fontWeight: 'normal',
    },
    description: {
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
        fontSize: '0.95rem',
        marginBottom: 'auto', // Pushes skills to bottom
        display: '-webkit-box',
        WebkitLineClamp: '4', // Limit lines to keep uniform
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    },
    skillsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginTop: '2rem',
        marginBottom: '1.5rem',
    },
    skillTag: {
        fontSize: '0.75rem',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        color: 'var(--text-secondary)',
        padding: '0.3rem 0.6rem',
        borderRadius: '4px',
    },
    linksContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 'auto',
    },
    link: {
        display: 'inline-flex',
        alignItems: 'center',
        color: '#00ff41',
        fontWeight: '600',
        fontSize: '0.95rem',
        textDecoration: 'none',
        width: 'fit-content',
        cursor: 'pointer',
    },
    expandedContent: {
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        lineHeight: '1.5',
        marginBottom: '1rem',
    },
    expandedList: {
        paddingLeft: '1.2rem',
        marginTop: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem',
    },
    listItem: {
        listStyleType: 'disc',
    },
    readMoreBtn: {
        color: '#00ff41',
        fontSize: '0.85rem',
        cursor: 'pointer',
        fontFamily: 'var(--font-mono)',
        width: 'fit-content',
        display: 'inline-block',
        marginTop: '0.5rem',
        userSelect: 'none',
    }
};

export default Projects;
