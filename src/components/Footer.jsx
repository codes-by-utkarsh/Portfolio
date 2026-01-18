import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div className="container" style={styles.content}>
                <div>&copy; {new Date().getFullYear()} Utkarsh Srivastava</div>
                <div style={styles.branding}>0xutkarsh</div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        padding: '2rem 0',
        borderTop: '1px solid var(--border-color)',
        marginTop: 'auto',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    branding: {
        fontFamily: 'var(--font-mono)',
    }
};

export default Footer;
