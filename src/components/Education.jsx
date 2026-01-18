import React from 'react';

const Education = () => {
    const educationList = [
        {
            school: "Vellore Institute of Technology",
            degree: "Bachelor of Technology - BTech, Cyber Security & Digital Forensics",
            period: "Aug 2023 - Aug 2027",
            status: "Pursuing",
            description: "Specializing in Cyber Security and Digital Forensics. Gaining in-depth knowledge of secure software development, network defense, and forensic analysis.",
            courses: [
                "Cyber Security", "Digital Forensics", "Cryptography", "Network Security",
                "Web Application Security", "Database Management (MongoDB/SQL)",
                "Operating Systems", "Computer Networks", "Java Programming"
            ],
            skills: ["MongoDB", "Tailwind CSS", "React.js", "Python", "Ethical Hacking"]
        },
        {
            school: "Cathedral College Jhansi",
            degree: "High School / Secondary Education",
            period: "Apr 2016 - Jun 2022",
            status: "Completed",
            description: "Foundation in Science and Mathematics with a focus on Computer Science.",
            courses: [
                "Physics", "Chemistry", "Mathematics", "Computer Science", "English"
            ]
        }
    ];

    return (
        <section id="education" className="section container">
            <h2 className="title">Education</h2>

            <div style={styles.container}>
                {educationList.map((edu, index) => (
                    <div key={index} style={styles.card}>
                        <div style={styles.header}>
                            <div>
                                <h3 style={styles.school}>{edu.school}</h3>
                                <p style={styles.degree}>{edu.degree}</p>
                            </div>
                            <div style={styles.meta}>
                                <span style={styles.period}>{edu.period}</span>
                                <span style={styles.status}>{edu.status}</span>
                            </div>
                        </div>

                        <p style={styles.description}>{edu.description}</p>

                        <div style={styles.section}>
                            <h4 style={styles.label}>Relevant Coursework:</h4>
                            <div style={styles.tags}>
                                {edu.courses.map((course, i) => (
                                    <span key={i} style={styles.tag}>{course}</span>
                                ))}
                            </div>
                        </div>

                        {edu.skills && (
                            <div style={styles.section}>
                                <h4 style={styles.label}>Skills Acquired:</h4>
                                <div style={styles.tags}>
                                    {edu.skills.map((skill, i) => (
                                        <span key={i} style={{ ...styles.tag, borderColor: '#00ff41', color: '#00ff41' }}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
    },
    card: {
        backgroundColor: 'var(--surface-color)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        padding: '2rem',
        transition: 'transform 0.2s, border-color 0.2s',
        ':hover': {
            borderColor: '#00ff41',
        }
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1rem',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        paddingBottom: '1rem',
    },
    school: {
        fontSize: '1.5rem',
        color: 'var(--text-primary)',
        marginBottom: '0.25rem',
    },
    degree: {
        fontSize: '1.1rem',
        color: '#00ff41',
        fontWeight: '500',
    },
    meta: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '0.25rem',
    },
    period: {
        fontFamily: 'var(--font-mono)',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
    },
    status: {
        fontSize: '0.8rem',
        padding: '2px 8px',
        borderRadius: '12px',
        backgroundColor: 'rgba(0, 255, 65, 0.1)',
        color: '#00ff41',
        fontWeight: '600',
    },
    description: {
        color: 'var(--text-secondary)',
        marginBottom: '1.5rem',
        lineHeight: '1.6',
    },
    section: {
        marginBottom: '1rem',
    },
    label: {
        fontSize: '0.9rem',
        color: 'var(--text-primary)',
        marginBottom: '0.5rem',
        fontWeight: '600',
    },
    tags: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
    },
    tag: {
        fontSize: '0.8rem',
        padding: '4px 10px',
        borderRadius: '4px',
        border: '1px solid var(--border-color)',
        color: 'var(--text-secondary)',
        backgroundColor: 'rgba(255,255,255,0.02)',
    }
};

export default Education;
