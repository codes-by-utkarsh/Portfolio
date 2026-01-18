import React, { useState } from 'react';
import ciisHackathonImg from '../assets/ciishackathon.jpg';
import kasperskyImg from '../assets/kaspersky.jpg';
import blackhatImg from '../assets/blackhat.jpg';
import htbCyberApocalypseImg from '../assets/htb-cyberapocalypse.jpg';
import shellZenImg from '../assets/shellzen.jpg';
import enigmaCtfImg from '../assets/EnigmaCTF.jpg';
import kasperskyCertImg from '../assets/kasperskyCERT.png';

const AchievementCard = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);

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
            <div style={styles.imageContainer}>
                {item.image ? (
                    <img
                        src={item.image}
                        alt={item.title}
                        style={{
                            ...styles.image,
                            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                        }}
                    />
                ) : (
                    <div style={styles.placeholderIcon}>🏆</div>
                )}
                <div style={styles.overlay}></div>
            </div>

            <div style={styles.content}>
                <div style={styles.header}>
                    <span style={styles.issuer}>{item.issuer}</span>
                    <span style={styles.date}>{item.date}</span>
                </div>

                <h3 style={styles.title}>{item.title}</h3>
                {item.subtitle && <h4 style={styles.subtitle}>{item.subtitle}</h4>}

                <p style={styles.description}>
                    {item.description}
                </p>
            </div>
        </div>
    );
};

const Achievements = () => {
    const achievements = [
        {
            title: "National CyberShield Hackathon 2025",
            subtitle: "CIIS 2025 - Top 35 Finalist",
            issuer: "Madhya Pradesh Police",
            date: "Sep 2025",
            description: "Finalist among top 35 teams India-wide. Built a real-time hoax bomb threat detection tool, pushing technical skills in a critical security challenge.",
            image: ciisHackathonImg
        },
        {
            title: "Kaspersky{CTF} 2025",
            subtitle: "Top 50 (Asia)",
            issuer: "Kaspersky SAS",
            date: "Aug 2025",
            description: "Finished in the Top 50 (out of 800+ teams) in Kaspersky{CTF} 2025 competition across Asia, demonstrating strong problem-solving and cybersecurity skills.",
            image: kasperskyCertImg
        },
        {
            title: "Black Hat USA CTF 2025",
            subtitle: "37th Place Globally",
            issuer: "Bugcrowd",
            date: "Jul 2025",
            description: "Secured 37th place globally in an international CTF competition. Demonstrated collaboration and advanced cybersecurity skills.",
            image: blackhatImg
        },
        {
            title: "HackTheBox Cyber Apocalypse 2025",
            subtitle: "Global Rank 1740",
            issuer: "HackTheBox",
            date: "Mar 2025",
            description: "Competed in cryptography, reverse engineering, web exploitation, and forensics challenges. Secured a global rank of 1740.",
            image: htbCyberApocalypseImg
        },
        {
            title: "Shell n' Zen 25 CTF",
            subtitle: "3rd Position",
            issuer: "OWASP VIT Bhopal",
            date: "Feb 2025",
            description: "Secured 3rd position. Solved challenges in web exploitation, cryptography, forensics, and reverse engineering.",
            image: shellZenImg
        },
        {
            title: "Enigma CTF 2025",
            subtitle: "Participant",
            issuer: "Enigma",
            date: "2025",
            description: "Participated in the Enigma CTF challenge, solving diverse cybersecurity problems.",
            image: enigmaCtfImg
        }
    ];

    return (
        <section id="achievements" className="section container">
            <h2 className="title">Honors & Awards</h2>
            <p style={styles.introText}>
                Secured 20+ portals including AICTE Internship portal (Govt Of India), ISACA, DSCI, etc. Acknowledged for responsible disclosure of critical vulnerabilities in Hall of Fame & Security Research.
            </p>

            <div className="grid-responsive" style={styles.grid}>
                {achievements.map((item, index) => (
                    <AchievementCard key={index} item={item} />
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
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s',
        cursor: 'default',
        minHeight: '450px',
    },
    imageContainer: {
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s ease',
    },
    placeholderIcon: {
        fontSize: '4rem',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(5,5,5,0.8) 100%)',
    },
    content: {
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.85rem',
        marginBottom: '0.8rem',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-mono)',
    },
    issuer: {
        color: '#00ff41',
        fontWeight: '600',
    },
    title: {
        fontSize: '1.25rem',
        marginBottom: '0.3rem',
        color: 'var(--text-primary)',
        lineHeight: '1.3',
    },
    subtitle: {
        fontSize: '1rem',
        color: 'var(--text-secondary)',
        fontWeight: '500',
        marginBottom: '1rem',
    },
    description: {
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
        fontSize: '0.95rem',
    },
    introText: {
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 3rem auto',
        color: 'var(--text-secondary)',
        fontSize: '1.1rem',
        lineHeight: '1.6',
    }
};

export default Achievements;
