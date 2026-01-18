import React from 'react';

const About = () => {
    return (
        <section id="about" className="section container">
            <div style={styles.quoteContainer}>
                <h1 style={styles.quote}>
                    "In the digital realm, true security lies not in the walls we build,
                    but in the <span style={{ color: '#00ff41' }}>eyes that watch</span> them."
                </h1>
                <p style={styles.author}>- The Philosophy of Offense</p>
            </div>

            <div style={styles.grid}>
                <div style={styles.card}>
                    <h3 style={styles.cardTitle}>About Me</h3>
                    <p style={styles.text}>
                        I am a <strong>Security Researcher</strong> and <strong>Back-End Developer </strong>
                        bridging the gap between offensive security and secure software engineering.
                        With a mindset that "to build secure, one must know how to break," found vulnerabilities
                        in critical infrastructure while simultaneously building robust, defense-ready applications.
                    </p>
                    <p style={styles.text}>
                        My approach involves rigorous <strong>Vulnerability Assessments</strong>, <strong>Malware Analysis</strong>,
                        and <strong>Reverse Engineering</strong> to ensure that every line of code I write (or audit)
                        stands resilient against modern cyber threats.
                    </p>
                </div>

                <div style={styles.card}>
                    <h3 style={styles.cardTitle}>Why Work With Me?</h3>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>
                            <span style={styles.icon}>•</span>
                            <span>
                                <strong>Top Ranking Security Professional:</strong> Ranked <strong>#37 Global</strong> in BlackHat USA CTF 2025
                                and <strong>Top 50 (Asia)</strong> in Kaspersky CTF.
                            </span>
                        </li>
                        <li style={styles.listItem}>
                            <span style={styles.icon}>•</span>
                            <span>
                                <strong>Proven Bug Hunter:</strong> Acknowledged by <strong>Hall of Fame</strong> lists for responsible disclosure
                                of critical vulnerabilities in major platforms.
                            </span>
                        </li>
                        <li style={styles.listItem}>
                            <span style={styles.icon}>•</span>
                            <span>
                                <strong>Industry Experience:</strong> Hands-on experience securing infrastructure at
                                <strong>Genxploit Labs </strong> and engaging in real-world VAPT scenarios.
                            </span>
                        </li>
                        <li style={styles.listItem}>
                            <span style={styles.icon}>•</span>
                            <span>
                                <strong>Builder & Breaker:</strong> Creator of tools like <strong>WatchDog</strong>
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
        textAlign: 'center',
        marginBottom: '4rem',
        padding: '2rem',
        borderLeft: '2px solid #00ff41',
        background: 'linear-gradient(90deg, rgba(0, 255, 65, 0.05) 0%, transparent 100%)',
    },
    quote: {
        fontSize: '1.5rem',
        fontStyle: 'italic',
        fontFamily: 'var(--font-mono)',
        color: 'var(--text-primary)',
        marginBottom: '1rem',
        lineHeight: '1.6',
    },
    author: {
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        textAlign: 'right',
        marginRight: '2rem',
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
        fontSize: '1.8rem',
        marginBottom: '1.5rem',
        color: '#fff',
        borderBottom: '1px solid var(--border-color)',
        paddingBottom: '0.5rem',
        display: 'inline-block',
        width: 'fit-content',
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
        fontSize: '1.2rem',
        marginTop: '0.2rem',
    }
};

export default About;
