import React, { useState } from 'react';

const SkillCard = ({ name, iconSlug, customIcon }) => {
    const [isHovered, setIsHovered] = useState(false);
    const darkLogos = ['express', 'owasp', 'openjdk'];
    const isDarkLogo = darkLogos.includes(iconSlug);

    return (
        <div
            style={{
                ...styles.skillCard,
                borderColor: isHovered ? '#00ff41' : 'var(--border-color)',
                transform: isHovered ? 'translateY(-5px)' : 'none',
                boxShadow: isHovered ? '0 5px 15px rgba(0, 255, 65, 0.1)' : 'none',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {iconSlug ? (
                <img
                    // Fetch default colored icon always
                    src={`https://cdn.simpleicons.org/${iconSlug}`}
                    alt={name}
                    style={{
                        ...styles.icon,
                        // Custom filter for dark logos to make them visible (invert black to white)
                        filter: isDarkLogo
                            ? (isHovered ? 'invert(1)' : 'grayscale(100%) invert(0.7)')
                            : (isHovered ? 'grayscale(0%)' : 'grayscale(100%) brightness(1.5)')
                    }}
                    title={name}
                />
            ) : customIcon ? (
                <span style={styles.emojiIcon}>{customIcon}</span>
            ) : null}
            <span style={{
                ...styles.skillName,
                color: isHovered ? '#fff' : 'var(--text-secondary)'
            }}>
                {name}
            </span>
        </div>
    );
};

const Skills = () => {
    const categories = [
        {
            title: "Offensive Security",
            items: [
                { name: "Burp Suite", slug: "burpsuite" },
                { name: "Metasploit", slug: "metasploit" },
                { name: "Wireshark", slug: "wireshark" },
                { name: "Nmap", slug: "nmap" },
                { name: "Kali Linux", slug: "kalilinux" },
                { name: "Parrot OS", slug: "parrotsecurity" },
                { name: "Zap Proxy", slug: "zaproxy" },
                { name: "Ghidra", custom: "🐉" } // Keeping Ghidra custom for now if slug unsure, user only mentioned Zap
            ]
        },
        {
            title: "Vulnerability & Analysis",
            items: [
                { name: "OWASP Top 10", slug: "owasp" },
                { name: "API Security", slug: "postman" },
                { name: "Mobile Security", slug: "android" },
                { name: "Malware Analysis", custom: "🦠" },
                { name: "Forensics", custom: "🔍" },
                { name: "Network Security", slug: "cisco" }
            ]
        },
        {
            title: "Languages",
            items: [
                { name: "Python", slug: "python" },
                { name: "Go", slug: "go" },
                { name: "Rust", slug: "rust" },
                { name: "C / C++", slug: "cplusplus" },
                { name: "Java", slug: "openjdk" },
                { name: "JavaScript", slug: "javascript" },
                { name: "Bash", slug: "gnubash" },
                { name: "SQL", slug: "postgresql" }
            ]
        },
        {
            title: "Backend & Cloud",
            items: [
                { name: "Node.js", slug: "nodedotjs" },
                { name: "Express", slug: "express" },
                { name: "SpringBoot", slug: "springboot" },
                { name: "Docker", slug: "docker" },
                { name: "AWS", slug: "amazonwebservices" },
                { name: "AWS EC2", slug: "amazonec2" },
                { name: "AWS S3", slug: "amazons3" },
                { name: "AWS Lambda", slug: "awslambda" },
                { name: "Git", slug: "git" },
                { name: "Linux", slug: "linux" },
                { name: "MongoDB", slug: "mongodb" }
            ]
        }
    ];

    return (
        <section id="skills" className="section container">
            <h2 className="title">Knowledge & Skills</h2>
            <div style={styles.grid}>
                {categories.map((category, idx) => (
                    <div key={idx} style={styles.categoryColumn}>
                        <h3 style={styles.categoryTitle}>{category.title}</h3>
                        <div style={styles.skillsWrapper}>
                            {category.items.map((skill, sIdx) => (
                                <SkillCard
                                    key={sIdx}
                                    name={skill.name}
                                    iconSlug={skill.slug}
                                    customIcon={skill.custom}
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '3rem',
    },
    categoryColumn: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    },
    categoryTitle: {
        fontSize: '1.1rem',
        color: '#00ff41',
        borderBottom: '1px solid #222',
        paddingBottom: '0.5rem',
        fontFamily: 'var(--font-mono)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
    },
    skillsWrapper: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', // Small cards
        gap: '1rem',
    },
    skillCard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: 'var(--surface-color)',
        borderRadius: '6px',
        border: '1px solid var(--border-color)',
        transition: 'all 0.2s ease',
        gap: '0.75rem',
        textAlign: 'center',
        cursor: 'default',
    },
    icon: {
        width: '32px',
        height: '32px',
        objectFit: 'contain',
        transition: 'filter 0.2s',
    },
    emojiIcon: {
        fontSize: '1.5rem',
    },
    skillName: {
        fontSize: '0.85rem',
        color: 'var(--text-secondary)',
        fontWeight: '500',
        transition: 'color 0.2s',
    }
};

export default Skills;
