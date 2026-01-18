import React, { useState, useRef, useEffect } from 'react';
import vityarthiImg from '../assets/vityarthi.jpg';
import jrPenTesterImg from '../assets/jrpentester.jpg';
import cnwppImg from '../assets/CNWPP.jpg';
import ethicalHackingImg from '../assets/ethicalhacking.png';
import arcxImg from '../assets/arcx.jpg';
import blockchainImg from '../assets/blockchain.jpg';
import bitsAndBytesImg from '../assets/bitsandbytes.jpg';
import microsoftImg from '../assets/microstoft.jpg';
import matlabImg from '../assets/matlab.jpg';

const CertificateCard = ({ cert }) => {
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
                {/* Using a placeholder or the actual image if provided */}
                <img
                    src={cert.image}
                    alt={cert.title}
                    style={{
                        ...styles.image,
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    }}
                    draggable="false" // Prevent image drag behavior
                />
                <div style={styles.overlay}></div>
            </div>

            <div style={styles.content}>
                <h3 style={styles.title}>{cert.title}</h3>
                <p style={styles.issuer}>Issued by {cert.issuer}</p>
                <p style={styles.date}>{cert.date}</p>
                {cert.credentialID && (
                    <p style={styles.credentialID}>ID: {cert.credentialID}</p>
                )}

                <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.link}
                    onMouseDown={(e) => e.stopPropagation()} // Allow clicking links without dragging
                >
                    <span style={{ marginRight: '8px' }}>🔗</span> View Certificate
                </a>
            </div>
        </div>
    );
};

const Certifications = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const certifications = [
        {
            title: "Jr. Penetration Tester",
            issuer: "TryHackMe",
            date: "May 2025",
            image: jrPenTesterImg,
            link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-SBZOIULVBQ.png",
            credentialID: "THM-SBZOIULVBQ"
        },
        {
            title: "CNWPP (Certified Network & Website Pen Testing Professional)",
            issuer: "Udemy",
            date: "Jun 2025",
            image: cnwppImg,
            link: "https://www.udemy.com/certificate/UC-6e4a08cb-9ebd-40ac-ab8b-431e1329d665/"
        },
        {
            title: "Ethical Hacking",
            issuer: "Udemy",
            date: "Oct 2024",
            image: ethicalHackingImg,
            link: "https://www.udemy.com/certificate/UC-6e4a08cb-9ebd-40ac-ab8b-431e1329d665/",
            credentialID: "UC-6e4a08cb-9ebd-40ac-ab8b-431e1329d665"
        },
        {
            title: "Foundation Level Threat intelligence Analyst",
            issuer: "arcX",
            date: "Dec 2024",
            image: arcxImg,
            link: "https://arcx.io/verify-certificate?id=8e880ba892d3088454521fd9da086604e0234e87&k=88fe4aaa86804484b16950378b75dd2c",
            credentialID: "8e880ba892d3088454521fd9da086604e0234e87"
        },
        {
            title: "Introduction to Programming Using Java",
            issuer: "Vityarthi",
            date: "Sep 2025",
            image: vityarthiImg,
            link: "https://vityarthi.com/certificate/iOnApIou0HLR",
            credentialID: "iOnApIou0HLR"
        },
        {
            title: "Blockchain and its Applications",
            issuer: "NPTEL",
            date: "May 2025",
            image: blockchainImg,
            link: "https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS08S55480007904215915",
            credentialID: "NPTEL25CS08S55480007904215915"
        },
        {
            title: "The Bits and Bytes of Computer Networking",
            issuer: "Google",
            date: "Jan 2025",
            image: bitsAndBytesImg,
            link: "https://www.coursera.org/account/accomplishments/certificate/JF6WRY1SLGAI",
            credentialID: "JF6WRY1SLGAI"
        },
        {
            title: "Microsoft Certified Systems Certifications",
            issuer: "Microsoft",
            date: "Jun 2024",
            image: microsoftImg,
            link: "https://www.linkedin.com/learning/certificates/6d32f0cf2fa973ef6036bd4444d4b6f83549fb7e520e5b4791c7be2892f126ac?trk=share_certificate",
            credentialID: "6d32f0cf2fa973ef6036bd4444d4b6f83549fb7e520e5b4791c7be2892f126ac"
        },
        {
            title: "MATLAB Certified",
            issuer: "MathWorks",
            date: "Aug 2023",
            image: matlabImg,
            link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=74657160-93b4-47e1-9802-5b857b7090fc&"
        },
        {
            title: "Fundamentals In AI & ML",
            issuer: "Vityarthi",
            date: "2024",
            image: vityarthiImg,
            link: "#"
        }
    ];

    // Auto-scroll logic
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId;

        const animate = () => {
            if (!isDragging) {
                scrollContainer.scrollLeft += 1; // Speed of auto-scroll

                // Infinite scroll reset
                // Check if we've scrolled past the first set (approx 1/3 of total width since we tripled it)
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3) {
                    // Reset to start (0) creates a jump if content isn't perfectly aligned or if view width varies.
                    // A safer reset point is 0 if we assume the first set is identical to second.
                    // Since we duplicate 3 times: [Set 1][Set 2][Set 3]
                    // When we finish Set 1, we are at start of Set 2, which looks exactly like Set 1.
                    // So specific pixel reset is: scrollLeft -= width_of_set_1
                    // But calculating exact width in pixels is hard dynamically without measurement.
                    // Simply resetting to 0 works IF the scrollLeft is exactly at the boundary.
                    // Since we increment by 1, we might drift.
                    // Let's rely on a simple loose reset which is "good enough" for this effect or 
                    // reset to 1 if 0 is sticky.
                    scrollContainer.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isDragging]);

    // Drag handlers
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast factor
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section id="certifications" className="section container" style={{ overflow: 'hidden' }}>
            <h2 className="title">Professional Certificates</h2>

            <div
                className="slider-container"
                ref={scrollRef}
                style={{
                    ...styles.sliderContainer,
                    cursor: isDragging ? 'grabbing' : 'grab'
                }}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <div style={styles.sliderTrack}>
                    {/* Triple the list to ensure smooth infinite scroll even on wide screens */}
                    {[...certifications, ...certifications, ...certifications].map((cert, index) => (
                        <div key={index} style={styles.slide}>
                            <CertificateCard cert={cert} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    sliderContainer: {
        width: '100%',
        overflowX: 'scroll', // Allow horizontal scrolling (hidden by css usually or simplified)
        overflowY: 'hidden',
        position: 'relative',
        padding: '2rem 0',
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none', // IE/Edge
        '::-webkit-scrollbar': { // Chrome/Safari
            display: 'none'
        }
    },
    sliderTrack: {
        display: 'flex',
        gap: '2rem',
        width: 'max-content',
        // No animation here, handled by JS
    },
    slide: {
        width: '350px',
        flexShrink: 0,
        userSelect: 'none', // Prevent text selection while dragging
    },
    card: {
        backgroundColor: 'var(--surface-color)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s',
        height: '100%', // Fill slide height
        minHeight: '420px',
    },
    imageContainer: {
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#1a1a1a',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s ease',
        pointerEvents: 'none', // Important for smooth dragging
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
    title: {
        fontSize: '1.1rem',
        fontWeight: '700',
        color: 'var(--text-primary)',
        marginBottom: '0.5rem',
        lineHeight: '1.4',
    },
    issuer: {
        fontSize: '0.9rem',
        color: '#00ff41',
        fontWeight: '500',
        marginBottom: '0.25rem',
    },
    date: {
        fontSize: '0.85rem',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-mono)',
        marginBottom: '0.5rem',
    },
    credentialID: {
        fontSize: '0.8rem',
        color: 'var(--text-secondary)',
        marginBottom: '1rem',
        fontFamily: 'var(--font-mono)',
        wordBreak: 'break-all',
    },
    link: {
        marginTop: 'auto',
        display: 'inline-flex',
        alignItems: 'center',
        color: 'var(--text-primary)',
        textDecoration: 'none',
        fontSize: '0.9rem',
        fontWeight: '600',
        transition: 'color 0.2s',
        cursor: 'pointer',
    }
};

export default Certifications;
