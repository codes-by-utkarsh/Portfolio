import React from 'react';

const About = () => {
    return (
        <section id="about" className="section container">
            <div style={styles.quoteContainer}>
                <h1 style={styles.quote}>
                    "In the digital realm, true security lies not in the walls we build,<br/>
                    but in the <span style={{ color: 'var(--accent-red)' }}>eyes that watch</span> them."
                </h1>
                <p style={styles.author}>-- // The Philosophy of Offense</p>
            </div>

            <div style={styles.grid}>
                <div style={styles.card}>
                    <h3 style={styles.cardTitle}>[ About_Me ]</h3>
                    <p style={styles.text}>
                        I am a <strong>Security Researcher</strong> and <strong>Back-End Developer </strong>
                        bridging the gap between offensive security and secure software engineering.
                        With a mindset that "to build secure, one must know how to break," found vulnerabilities
                        in critical infrastructure while simultaneously building robust, defense-ready applications.
                    </p>
                    <p style={styles.text}>
                        My approach involves rigorous <strong style={{color: 'var(--accent-yellow)'}}>Vulnerability Assessments</strong>, <strong style={{color: 'var(--accent-yellow)'}}>Malware Analysis</strong>,
                        and <strong style={{color: 'var(--accent-yellow)'}}>Reverse Engineering</strong> to ensure that every line of code I write (or audit)
                        stands resilient against modern cyber threats.
                    </p>
                </div>

                <div style={styles.card}>
                    <h3 style={styles.cardTitle}>[ Why_Work_With_Me ]</h3>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            <span style={styles.icon}>&gt;</span>
                            <span>
                                <strong style={{color: 'var(--accent-cyan)'}}>Top Ranking Security Professional:</strong> Ranked <strong>#37 Global</strong> in BlackHat USA CTF 2025
                                and <strong>Top 50 (Asia)</strong> in Kaspersky CTF.
                            </span>
                        </li>
                        <li style={styles.listItem}>
                            <span style={styles.icon}>&gt;</span>
                            <span>
                                <strong style={{color: 'var(--accent-cyan)'}}>Proven Bug Hunter:</strong> Acknowledged by <strong>Hall of Fame</strong> lists for responsible disclosure
                                of critical vulnerabilities in major platforms.
                            </span>
                        </li>
                        <li style={styles.listItem}>
                            <span style={styles.icon}>&gt;</span>
                            <span>
                                <strong style={{color: 'var(--accent-cyan)'}}>Industry Experience:</strong> Hands-on experience securing infrastructure at
                                <strong> Genxploit Labs </strong> and engaging in real-world VAPT scenarios.
                            </span>
                        </li>
                        <li style={styles.listItem}>
                            <span style={styles.icon}>&gt;</span>
                            <span>
                                <strong style={{color: 'var(--accent-cyan)'}}>Builder & Breaker:</strong> Creator of tools like <strong>WatchDog</strong>
                                 and <strong>trueSight</strong>, proven Industrial skillset.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const styles = {
    quoteContainer: {
        textAlign: 'left',
        marginBottom: '4rem',
        padding: '2rem',
        borderLeft: '2px dashed var(--accent-red)',
        background: 'rgba(255, 51, 102, 0.05)',
    },
    quote: {
        fontSize: '1.4rem',
        fontStyle: 'normal',
        fontFamily: 'var(--font-mono)',
        color: 'var(--text-primary)',
        marginBottom: '1rem',
        lineHeight: '1.6',
    },
    author: {
        color: 'var(--text-secondary)',
        fontSize: '0.95rem',
        fontFamily: 'var(--font-mono)',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '3rem',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardTitle: {
        fontSize: '1.5rem',
        marginBottom: '1.5rem',
        color: 'var(--accent-green)',
        fontFamily: 'var(--font-mono)',
        borderBottom: '1px solid var(--border-color)',
        paddingBottom: '0.5rem',
        display: 'inline-block',
        width: '100%',
        textTransform: 'uppercase',
        fontWeight: 'normal',
    },
    text: {
        color: 'var(--text-secondary)',
        lineHeight: '1.8',
        fontSize: '1.05rem',
        marginBottom: '1.5rem',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    },
    listItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
        fontSize: '1rem',
    },
    icon: {
        fontSize: '1.1rem',
        color: 'var(--accent-green)',
        fontFamily: 'var(--font-mono)',
        marginTop: '0.1rem',
    }
};

export default About;
