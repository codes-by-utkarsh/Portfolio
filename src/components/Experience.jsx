import React from 'react';

const Experience = () => {
    const experiences = [
        {
            role: 'Security & Compliance Engineering',
            company: 'ConversAI Labs',
            type: 'Contract/Freelance',
            duration: 'Apr 2026 - Present',
            location: 'Remote',
            desc: [
                'Worked on securing and preparing a production-grade AI platform for compliance (SOC2-oriented). Focused on backend/API security, vulnerability assessment, and infrastructure-level risk analysis.',
                'Performed deep API security testing (white-box) across authentication, authorization, and input validation layers.',
                'Identified and tested vulnerabilities including: Mass assignment, improper input validation (XSS), and authorization weaknesses.',
                'Designed and executed a structured vulnerability assessment methodology aligned with real-world bug bounty workflows.',
                'Assisted in security fixes: Input validation, secure schema enforcement, and API rate limiting.',
                'Contributed to SOC2 readiness by evaluating open-source compliance tools (e.g., CompAI) and defining audit scope/controls.',
                'Analyzed GCP cloud security posture, defining IAM role review strategy and external attack surface considerations.',
                'Improved API security posture and contributed to compliance readiness.'
            ],
            skills: ['Python', 'Postman', 'Burp Suite', 'GCP', 'OWASP Top 10'],
            links: [
                { label: 'Company Website', url: 'https://conversailabs.com' }
            ]
        },
        {
            role: 'Backend Developer',
            company: 'Genxploit Labs',
            type: 'Internship',
            duration: 'Dec 2025 - Mar 2026',
            location: 'Amsterdam, Netherlands (Remote)',
            desc: [
                'Designed and implemented the entire backend infrastructure using Supabase and PostgreSQL.',
                'Built secure authentication/authorization with RLS policies for Admin, Triager, Researcher, and Company User roles.',
                'Implemented access controls, session handling, and backend security configurations.',
                'Contributed to making the platform production-ready and scalable.'
            ],
            skills: ['Supabase', 'PostgreSQL', 'Backend Security'],
            links: [
                { label: 'Offer Letter', url: 'https://drive.google.com/file/d/1cxl4ITNMXiRZQF4K4hgui_sGkcw4F-jt/view?usp=sharing' }
            ]
        },
        {
            role: 'Security Analyst Intern',
            company: 'Technavors Security',
            type: 'Internship',
            duration: 'Sep 2025 - Dec 2025',
            location: 'Pune, India (Remote)',
            desc: [
                'Performed security assessments and penetration tests on authorized systems.',
                'Documented findings and provided remediation recommendations.',
                'Collaborated with the security team to respond to potential security events.'
            ],
            skills: ['VAPT', 'Security Audits'],
            links: [
                { label: 'Offer Letter', url: 'https://drive.google.com/drive/folders/1GsXw3r3-r_koyqILbgxF3JPXP2O16vXE?usp=sharing' }
            ]
        },
        {
            role: 'Security Researcher',
            company: 'Bugcrowd',
            type: 'Freelance',
            duration: 'Apr 2025 - Sep 2025',
            location: 'Remote',
            desc: [
                'Conducted Web Application Security assessments and VAPT.',
                'Identified and reported vulnerabilities in various programs.'
            ],
            skills: ['Web Security', 'VAPT'],
            links: [
                { label: 'View Profile', url: 'https://bugcrowd.com/drizzlehx' }
            ]
        },
        {
            role: 'Technical Team Lead',
            company: 'Null VIT Bhopal Student Chapter',
            type: 'Community',
            duration: 'Aug 2025 - Sep 2025',
            location: 'Bhopal, India',
            desc: [
                'Contributed to cybersecurity projects, CTFs, and technical workshops.',
                'Collaborated to build tools and promote cybersecurity awareness.'
            ],
            skills: ['Ethical Hacking', 'Cryptography'],
            links: [
                { label: 'Appointment Letter', url: '/appointment_letter.jpg' }
            ]
        },
        {
            role: 'Technical Team Member',
            company: 'OWASP® Club VIT Bhopal',
            type: 'Community',
            duration: 'Jul 2025',
            location: 'Bhopal, India',
            desc: [
                'Participated in technical events and contributed to OWASP initiatives.'
            ],
            skills: ['OWASP', 'InfoSec']
        }
    ];

    return (
        <section id="experience" className="section container">
            <h2 className="title">Work Experience</h2>

            {/* CTF Rank Highlight */}
            <div style={styles.highlightCard}>
                <div style={styles.rankBadge}>CTF Ranking</div>
                <h3 style={styles.teamName}>Ranked #31 at <a href="https://ctftime.org/team/286659">ctftimes.org</a> in India</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>with buf!3rBr34CH3r$</p>
            </div>

            <div style={styles.timeline}>
                {experiences.map((exp, index) => (
                    <div key={index} style={styles.timelineItem}>
                        <div style={styles.marker}></div>
                        <div style={styles.content}>
                            <div style={styles.header}>
                                <h3 style={styles.role}>{exp.role}</h3>
                                <span style={styles.duration}>{exp.duration}</span>
                            </div>
                            <div style={styles.subHeader}>
                                <span style={styles.company}>{exp.company}</span>
                                <span style={styles.type}>• {exp.type}</span>
                                <span style={styles.location}>• {exp.location}</span>
                            </div>

                            {/* Links/Documents */}
                            {exp.links && (
                                <div style={styles.linksContainer}>
                                    {exp.links.map((link, i) => (
                                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" style={styles.docLink}>
                                            📄 {link.label}
                                        </a>
                                    ))}
                                </div>
                            )}

                            <ul style={styles.list}>
                                {exp.desc.map((point, i) => (
                                    <li key={i} style={styles.listItem}>
                                        <span style={styles.bullet}>›</span> {point}
                                    </li>
                                ))}
                            </ul>
                            <div style={styles.tags}>
                                {exp.skills.map(skill => (
                                    <span key={skill} style={styles.tag}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const styles = {
    highlightCard: {
        padding: '1.5rem',
        border: '1px solid var(--border-color)', // Green border
        background: 'linear-gradient(45deg, rgba(0,255,65,0.05) 0%, rgba(0,0,0,0) 100%)',
        borderRadius: '8px',
        marginBottom: '3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    rankBadge: {
        backgroundColor: '#00ff41',
        color: '#000',
        fontWeight: 'bold',
        padding: '0.25rem 0.75rem',
        borderRadius: '100px',
        fontSize: '0.9rem',
        marginBottom: '0.5rem',
        fontFamily: 'var(--font-mono)',
    },
    teamName: {
        fontSize: '1.5rem',
        fontWeight: '700',
        color: 'var(--text-primary)',
    },
    timeline: {
        position: 'relative',
        paddingLeft: '20px',
        borderLeft: '1px solid var(--border-color)',
    },
    timelineItem: {
        marginBottom: '3rem',
        position: 'relative',
        paddingLeft: '2rem',
    },
    marker: {
        position: 'absolute',
        left: '-25px',
        top: '5px',
        width: '11px',
        height: '11px',
        backgroundColor: '#00ff41',
        borderRadius: '50%',
        border: '2px solid #000',
        boxShadow: '0 0 10px rgba(0,255,65,0.5)',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem',
        alignItems: 'baseline',
    },
    role: {
        fontSize: '1.2rem',
        fontWeight: '600',
        color: 'var(--text-primary)',
    },
    duration: {
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        color: '#00ff41',
    },
    subHeader: {
        fontSize: '1rem',
        color: 'var(--text-secondary)',
        marginBottom: '0.5rem',
    },
    company: {
        fontWeight: '500',
        color: 'var(--text-primary)',
    },
    type: {
        color: 'var(--text-secondary)',
    },
    location: {
        color: 'var(--text-secondary)',
        fontStyle: 'italic',
    },
    linksContainer: {
        display: 'flex',
        gap: '1rem',
        marginBottom: '0.5rem',
    },
    docLink: {
        fontSize: '0.9rem',
        color: '#00ff41', // Cyber green
        textDecoration: 'none',
        borderBottom: '1px dotted #00ff41',
        display: 'flex',
        alignItems: 'center',
        gap: '0.3rem',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem',
        marginBottom: '1rem',
    },
    listItem: {
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'flex-start',
        color: 'var(--text-secondary)',
        fontSize: '0.95rem',
        lineHeight: '1.5',
    },
    bullet: {
        color: '#00ff41',
        fontWeight: 'bold',
    },
    tags: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
    },
    tag: {
        fontSize: '0.8rem',
        padding: '0.2rem 0.6rem',
        border: '1px solid var(--border-color)',
        borderRadius: '4px',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-mono)',
    }
};

export default Experience;
