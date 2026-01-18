import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [copied, setCopied] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, subject, message } = formData;
        // Construct mailto link
        const mailtoLink = `mailto:usrivastava2011@gmail.com?subject=${encodeURIComponent(subject || `Portfolio Contact from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoLink;
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('usrivastava2011@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="section container">
            <h2 className="title">Get In Touch</h2>
            <div className="grid-responsive" style={styles.grid}>
                <div style={styles.info}>
                    <div style={styles.status}>
                        <span style={styles.statusDot}></span>
                        <span>Available for new opportunities</span>
                    </div>

                    <h3 style={styles.heading}>Let's secure the future together.</h3>
                    <p style={styles.text}>
                        Have a project in mind or looking for a security audit?
                        Feel free to reach out. I'm always open to discussing new ideas,
                        finding vulnerabilities, and building secure systems.
                    </p>

                    <div style={styles.contactCard}>
                        <div style={styles.icon}>✉️</div>
                        <div style={styles.contactDetails}>
                            <div style={styles.label}>Email Address</div>
                            <div style={styles.emailRow}>
                                <a href="mailto:usrivastava2011@gmail.com" style={styles.link}>
                                    usrivastava2011@gmail.com
                                </a>
                                <button
                                    onClick={handleCopyEmail}
                                    style={styles.copyBtn}
                                    title="Copy to clipboard"
                                >
                                    {copied ? '✓' : '❐'}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <div style={styles.socialPrompt}>
                        Connect via social media links in the hero section.
                    </div> */}
                </div>

                <form style={styles.form} onSubmit={handleSubmit}>
                    <div style={styles.row}>
                        <div style={styles.inputGroup}>
                            <label style={styles.inputLabel}>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                style={styles.input}
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <label style={styles.inputLabel}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                style={styles.input}
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.inputLabel}>Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            style={styles.input}
                            placeholder="Project Inquiry"
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.inputLabel}>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            style={styles.textarea}
                            rows="5"
                            placeholder="Tell me about your project..."
                            required
                        ></textarea>
                    </div>

                    <button className="btn btn-primary" style={styles.submitBtn}>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '4rem',
        alignItems: 'start',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
    },
    status: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        backgroundColor: 'rgba(0, 255, 65, 0.1)',
        color: '#00ff41',
        padding: '0.5rem 1rem',
        borderRadius: '100px',
        fontSize: '0.85rem',
        fontWeight: '500',
        width: 'fit-content',
        marginBottom: '1.5rem',
    },
    statusDot: {
        width: '8px',
        height: '8px',
        backgroundColor: '#00ff41',
        borderRadius: '50%',
        boxShadow: '0 0 10px #00ff41',
    },
    heading: {
        fontSize: '2rem',
        marginBottom: '1rem',
        lineHeight: '1.2',
        color: 'var(--text-primary)',
    },
    text: {
        fontSize: '1rem',
        color: 'var(--text-secondary)',
        marginBottom: '2.5rem',
        lineHeight: '1.6',
    },
    contactCard: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1.5rem',
        backgroundColor: 'var(--surface-color)',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
    },
    icon: {
        fontSize: '1.5rem',
        color: '#00ff41',
    },
    contactDetails: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        fontSize: '0.8rem',
        color: 'var(--text-secondary)',
        marginBottom: '0.2rem',
    },
    emailRow: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
    },
    link: {
        fontSize: '1.1rem',
        color: 'var(--text-primary)',
        fontWeight: '500',
        textDecoration: 'none',
        transition: 'color 0.2s',
        wordBreak: 'break-all',
    },
    copyBtn: {
        background: 'none',
        border: 'none',
        color: 'var(--text-secondary)',
        cursor: 'pointer',
        fontSize: '1.2rem',
        padding: '0 0.5rem',
        transition: 'color 0.2s',
        ':hover': {
            color: '#00ff41',
        }
    },
    socialPrompt: {
        marginTop: '2rem',
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        fontStyle: 'italic',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        backgroundColor: 'var(--surface-color)',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
    },
    row: {
        display: 'flex',
        gap: '1.5rem',
        flexWrap: 'wrap',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        flex: 1,
        minWidth: '200px',
    },
    inputLabel: {
        fontSize: '0.9rem',
        color: 'var(--text-secondary)',
        fontWeight: '500',
    },
    input: {
        padding: '1rem',
        backgroundColor: 'rgba(0,0,0,0.2)',
        border: '1px solid var(--border-color)',
        borderRadius: '6px',
        color: 'var(--text-primary)',
        fontSize: '1rem',
        fontFamily: 'inherit',
        outline: 'none',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        ':focus': {
            borderColor: '#00ff41',
            boxShadow: '0 0 0 2px rgba(0, 255, 65, 0.1)',
        }
    },
    textarea: {
        padding: '1rem',
        backgroundColor: 'rgba(0,0,0,0.2)',
        border: '1px solid var(--border-color)',
        borderRadius: '6px',
        color: 'var(--text-primary)',
        fontSize: '1rem',
        fontFamily: 'inherit',
        outline: 'none',
        resize: 'vertical',
        transition: 'border-color 0.3s',
        minHeight: '120px',
    },
    submitBtn: {
        width: '100%',
        marginTop: '0.5rem',
    }
};

export default Contact;
