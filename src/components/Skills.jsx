import React from 'react';
import spiderImg from '../assets/Spider.png';

const Skills = () => {
    const categories = [
        {
            title: "FRONTEND & LANGUAGES",
            number: "01",
            items: ["C", "C++", "Python", "JS", "Qt", "HTML5", "CSS3", "React", "React Flow"],
            colSpan: 2
        },
        {
            title: "AI / ML",
            number: "02",
            items: ["TensorFlow", "PyTorch", "OpenCV", "FastAPI"],
            colSpan: 1
        },
        {
            title: "BACKEND & DB",
            number: "03",
            items: ["Node.js", "Express", "MySQL", "MongoDB"],
            colSpan: 1
        },
        {
            title: "CYBERSECURITY",
            number: "04",
            items: ["Burp Suite", "Nmap", "Wireshark", "Ghidra"],
            colSpan: 1
        },
        {
            title: "DEVOPS",
            number: "05",
            items: ["Docker", "Git", "GitHub Actions", "CI/CD", "Vite", "NPM"],
            colSpan: 1
        },
        {
            title: "DEPLOYMENT",
            number: "06",
            items: ["Vercel", "Render", "GitHub", "Netlify"],
            colSpan: 1
        },
        {
            title: "UI/UX",
            number: "07",
            items: ["Figma", "Canva", "Photoshop", "Adobe Animate"],
            colSpan: 1
        }
    ];

    return (
        <section id="skills" style={styles.section}>
            {/* Spider Logo Image */}
            <img src={spiderImg} alt="Spider Logo Indicator" style={styles.spiderContainer} />

            <div style={styles.container}>
                <div style={styles.header}>
                    <div style={styles.breadcrumb}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff" style={{ marginRight: '14px' }}>
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                        </svg>
                        <span style={styles.breadcrumbDot}></span> / TECH STACK
                    </div>
                    <h2 style={styles.mainTitle}>Skillset</h2>
                </div>

                <div className="cards-grid" style={styles.cardsGrid}>
                    {categories.map((cat, idx) => (
                        <div key={idx} style={{
                            ...styles.card,
                            gridColumn: `span ${cat.colSpan}`
                        }} className="skill-card">
                            {/* Giant faded background number */}
                            <div style={styles.cardNumber}>{cat.number}</div>

                            <h3 style={styles.cardTitle}>&lt; {cat.title} &gt;</h3>

                            <div style={styles.skillsWrapper}>
                                {cat.items.map((skill, sIdx) => (
                                    <span key={sIdx} style={styles.skillPill} className="skill-pill">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scoped CSS for hover and responsive effects */}
            <style>
                {`
                .cards-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                }
                .skill-card {
                    transition: all 0.3s ease;
                }
                .skill-card:hover {
                    border-color: rgba(59, 130, 246, 0.5) !important;
                    box-shadow: 0 8px 30px rgba(59, 130, 246, 0.15) !important;
                    transform: translateY(-4px);
                }
                .skill-pill {
                    transition: all 0.2s ease;
                }
                .skill-pill:hover {
                    background-color: rgba(59, 130, 246, 0.25) !important;
                    border-color: rgba(59, 130, 246, 0.8) !important;
                    color: #fff !important;
                    transform: scale(1.05);
                }
                @media (max-width: 992px) {
                    .cards-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .skill-card {
                        grid-column: span 1 !important;
                    }
                }
                @media (max-width: 650px) {
                    .cards-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}
            </style>
        </section>
    );
};

const styles = {
    section: {
        position: 'relative',
        padding: '6rem 2rem',
        minHeight: '100vh',
        overflow: 'hidden',
        fontFamily: "'Inter', sans-serif"
    },
    spiderContainer: {
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        maxWidth: '700px',
        opacity: 0.15, // Muted opacity for the image watermark
        zIndex: 2,
        pointerEvents: 'none',
        objectFit: 'contain',
        filter: 'drop-shadow(0 0 15px rgba(37, 99, 235, 0.4))'
    },
    container: {
        position: 'relative',
        zIndex: 3,
        maxWidth: '1200px',
        margin: '0 auto',
    },
    header: {
        marginBottom: '4rem',
    },
    breadcrumb: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '0.85rem',
        color: '#64748b',
        letterSpacing: '0.2em',
        marginBottom: '1rem',
        fontWeight: '600'
    },
    breadcrumbDot: {
        width: '6px',
        height: '6px',
        backgroundColor: '#3b82f6',
        borderRadius: '50%',
        boxShadow: '0 0 15px #3b82f6, 0 0 5px #3b82f6',
        margin: '0 14px'
    },
    mainTitle: {
        fontSize: '4.5rem',
        fontWeight: '800',
        color: '#ffffff',
        fontStyle: 'italic',
        margin: 0,
        letterSpacing: '-0.03em',
        textShadow: '0 4px 20px rgba(0,0,0,0.8)',
    },
    cardsGrid: {
        /* handled in <style> block for media queries */
    },
    card: {
        position: 'relative',
        backgroundColor: 'rgba(15, 23, 42, 0.5)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(59, 130, 246, 0.2)',
        borderRadius: '24px',
        padding: '2.5rem',
        overflow: 'hidden',
        minHeight: '180px',
        display: 'flex',
        flexDirection: 'column',
    },
    cardTitle: {
        color: '#3b82f6',
        fontSize: '0.95rem',
        fontWeight: '700',
        letterSpacing: '0.15em',
        marginBottom: '2rem',
        position: 'relative',
        zIndex: 2,
        fontFamily: "'JetBrains Mono', monospace"
    },
    cardNumber: {
        position: 'absolute',
        bottom: '-25px',
        right: '15px',
        fontSize: '10rem',
        fontWeight: '900',
        color: 'rgba(255, 255, 255, 0.03)',
        lineHeight: 1,
        pointerEvents: 'none',
        zIndex: 0,
        fontStyle: 'italic',
    },
    skillsWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.9rem',
        position: 'relative',
        zIndex: 2,
    },
    skillPill: {
        backgroundColor: 'rgba(30, 41, 59, 0.7)',
        border: '1px solid rgba(148, 163, 184, 0.15)',
        color: '#cbd5e1',
        padding: '0.6rem 1.4rem',
        borderRadius: '50px',
        fontSize: '0.95rem',
        fontWeight: '500',
        cursor: 'default',
        backdropFilter: 'blur(8px)',
    }
};

export default Skills;
