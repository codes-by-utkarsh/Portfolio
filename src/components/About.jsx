import React from 'react';

const About = () => {
    return (
        <section id="about" className="section container">
            <h2 className="title">Present Status</h2>
            <div style={styles.grid}>
                <div style={styles.card}>
                    <h3 style={styles.cardTitle}>Current Focus</h3>
                    <ul style={styles.list}>
                        {[
                            "Still Learning Bug hunting & malware forensics.",
                            "Managing Development and Cyber Security simultaneously.",
                            "Building Some Useful Tools For Myself & Community.",
                            "Building & Contributing To Open Source Projects",
                            "Currently Learning Malware Analysis and Reverse Engineering."
                        ].map((item, i) => (
                            <li key={i} style={styles.listItem}>
                                <span style={styles.bullet}>👉</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={styles.card}>
                    <h3 style={styles.cardTitle}>Journey</h3>
                    <p style={styles.text}>
                        I possess an upper hand over "vibe coders," ensuring the safety and security of the code.
                        The security configuration is up to the mark if handled by me.
                        Updating: Journey to Cybersecurity Specialist.
                    </p>
                    <div style={{ marginTop: '1rem' }}>
                        <p style={{ ...styles.text, fontStyle: 'italic' }}>
                            "Lifelong learner — always exploring everything"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
    },
    card: {
        padding: '2rem',
        backgroundColor: 'var(--surface-color)',
        borderRadius: '8px',
        border: '1px solid var(--border-color)',
    },
    cardTitle: {
        fontSize: '1.25rem',
        marginBottom: '1.5rem',
        borderBottom: '1px solid var(--border-color)',
        paddingBottom: '0.5rem',
        display: 'inline-block',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    listItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
        color: 'var(--text-secondary)',
    },
    bullet: {
        color: 'var(--text-primary)',
    },
    text: {
        color: 'var(--text-secondary)',
        marginBottom: '1rem',
    }
};

export default About;
