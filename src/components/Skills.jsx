import React, { useState } from 'react';

const SkillCard = ({ name }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{
                ...styles.skillCard,
                borderColor: isHovered ? 'var(--accent-cyan)' : 'var(--border-color)',
                color: isHovered ? 'var(--accent-cyan)' : 'var(--text-primary)',
                backgroundColor: isHovered ? 'rgba(0, 240, 255, 0.05)' : 'transparent',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span style={styles.skillName}>
                {name}
            </span>
        </div>
    );
};

const Skills = () => {
    const categories = [
        {
            title: "OFFENSIVE SECURITY",
            items: [
                { name: "Burp Suite" },
                { name: "Metasploit" },
                { name: "Wireshark" },
                { name: "Nmap" },
                { name: "Kali Linux" },
                { name: "Parrot OS" },
                { name: "Zap Proxy" },
                { name: "Ghidra" }
            ]
        },
        {
            title: "VULNERABILITY ANALYSIS",
            items: [
                { name: "OWASP Top 10" },
                { name: "API Security" },
                { name: "Mobile Security" },
                { name: "Malware Analysis" },
                { name: "Forensics" },
                { name: "Network Security" }
            ]
        },
        {
            title: "LANGUAGES",
            items: [
                { name: "Python" },
                { name: "Go" },
                { name: "Rust" },
                { name: "C / C++" },
                { name: "Java" },
                { name: "JavaScript" },
                { name: "Bash" },
                { name: "SQL" }
            ]
        },
        {
            title: "BACKEND & CLOUD",
            items: [
                { name: "Node.js" },
                { name: "Express" },
                { name: "SpringBoot" },
                { name: "Docker" },
                { name: "AWS EC2" },
                { name: "AWS S3" },
                { name: "AWS Lambda" },
                { name: "Git" },
                { name: "Linux" },
                { name: "MongoDB" }
            ]
        }
    ];

    return (
        <section id="skills" className="section container">
            <h2 className="title">Skills & Capabilities</h2>
            <div style={styles.grid}>
                {categories.map((category, idx) => (
                    <div key={idx} style={styles.categoryBox}>
                        <h3 style={styles.categoryTitle}>{category.title}</h3>
                        <div style={styles.skillsWrapper}>
                            {category.items.map((skill, sIdx) => (
                                <SkillCard
                                    key={sIdx}
                                    name={skill.name}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '1.5rem',
    },
    categoryBox: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem',
        backgroundColor: 'var(--surface-color)',
        border: '1px solid var(--border-color)',
    },
    categoryTitle: {
        fontSize: '1rem',
        color: 'var(--text-secondary)',
        marginBottom: '1.5rem',
        fontFamily: 'var(--font-mono)',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontWeight: 'normal',
    },
    skillsWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.75rem',
    },
    skillCard: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem 1rem',
        border: '1px solid var(--border-color)',
        transition: 'all 0.2s ease',
        cursor: 'default',
    },
    skillName: {
        fontSize: '0.9rem',
        fontWeight: 'normal',
        fontFamily: 'var(--font-mono)',
    }
};

export default Skills;
