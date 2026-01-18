import React, { useState } from 'react';

const Services = () => {
    const [showModal, setShowModal] = useState(false);
    const [step, setStep] = useState(1); // 1: Details, 2: Payment, 3: Success
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState('card');

    const plans = [
        {
            name: "Basic Protection",
            price: 50,
            features: [
                "Automated Vulnerability Scan",
                "Basic Security Report",
                "OWASP Top 10 Check",
                "Email Support"
            ]
        },
        {
            name: "Standard Pentest",
            price: 75,
            features: [
                "Manual Penetration Testing",
                "Detailed Vulnerability Analysis",
                "Exploit Verification",
                "Remediation Guidance"
            ]
        },
        {
            name: "Premium Audit",
            price: 100,
            features: [
                "Full Scope Security Audit",
                "Advanced Exploitation",
                "Post-Patch Verification",
                "Priority Support & Consultation"
            ]
        }
    ];

    const handlePurchase = (plan) => {
        setSelectedPlan(plan);
        setShowModal(true);
        setStep(1);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedPlan(null);
    };

    return (
        <section id="services" className="section container">
            <h2 className="title">Services</h2>
            <div style={styles.cardContainer}>
                {plans.map((plan, index) => (
                    <div key={index} style={styles.card}>
                        <div style={styles.cardHeader}>
                            <h3 style={styles.serviceName}>{plan.name}</h3>
                            <div style={styles.price}>
                                <span style={styles.currency}>$</span>{plan.price}
                            </div>
                        </div>
                        <ul style={styles.features}>
                            {plan.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                        <button style={styles.button} onClick={() => handlePurchase(plan)}>
                            Select Plan
                        </button>
                    </div>
                ))}
            </div>

            {showModal && selectedPlan && (
                <div style={styles.modalOverlay}>
                    <div style={styles.modal}>
                        <button style={styles.closeBtn} onClick={closeModal}>&times;</button>
                        {step === 1 && (
                            <div style={styles.modalContent}>
                                <h3 style={styles.modalTitle}>Request: {selectedPlan.name}</h3>
                                <p style={styles.modalSubtitle}>Enter your details to proceed.</p>
                                <input type="email" placeholder="Email Address" style={styles.input} />
                                <input type="text" placeholder="Target URL / Scope" style={styles.input} />
                                <button style={styles.modalBtn} onClick={() => setStep(2)}>Continue to Payment</button>
                            </div>
                        )}
                        {step === 2 && (
                            <div style={styles.modalContent}>
                                <h3 style={styles.modalTitle}>Payment Gateway</h3>
                                <p style={styles.modalSubtitle}>Secure Checkout - ${selectedPlan.price}.00</p>

                                <div style={styles.paymentMethods}>
                                    <div
                                        style={paymentMethod === 'card' ? styles.methodActive : styles.method}
                                        onClick={() => setPaymentMethod('card')}
                                    >
                                        International
                                    </div>
                                    <div
                                        style={paymentMethod === 'upi' ? styles.methodActive : styles.method}
                                        onClick={() => setPaymentMethod('upi')}
                                    >
                                        UPI (India)
                                    </div>
                                    <div
                                        style={paymentMethod === 'crypto' ? styles.methodActive : styles.method}
                                        onClick={() => setPaymentMethod('crypto')}
                                    >
                                        Crypto
                                    </div>
                                </div>

                                {paymentMethod === 'card' && (
                                    <div style={styles.cardForm}>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                                            For security, we handle international payments via PayPal. You can pay using any Credit/Debit Card or PayPal wallet.
                                        </p>
                                        <a
                                            href={`https://paypal.me/usrivastava2011/${selectedPlan.price}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={styles.paypalBtn}
                                        >
                                            Pay ${selectedPlan.price} via PayPal
                                        </a>
                                        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '1rem', textAlign: 'center' }}>
                                            *Link opens in a new tab. After paying, click 'I have completed the payment' below.
                                        </p>
                                    </div>
                                )}

                                {paymentMethod === 'upi' && (
                                    <div style={styles.cardForm}>
                                        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                            <img
                                                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=usrivastava2011@okaxis&pn=Utkarsh%20Srivastava&am=${selectedPlan.price * 85}&cu=INR`}
                                                alt="UPI QR Code"
                                                style={{ border: '4px solid #fff', borderRadius: '8px' }}
                                            />
                                            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                                                Scan to pay ₹{selectedPlan.price * 85}
                                            </p>
                                        </div>
                                        <input type="text" placeholder="Enter VPA / UPI ID" style={styles.input} />
                                    </div>
                                )}

                                {paymentMethod === 'crypto' && (
                                    <div style={styles.cardForm}>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                            Send exactly <strong>0.0__ BTC</strong> or <strong>0.0__ ETH</strong> to the addresses below.
                                        </p>
                                        <div style={styles.cryptoAddress}>
                                            <span style={{ color: '#00ff41' }}>ETH:</span> 0x123...abc
                                        </div>
                                    </div>
                                )}

                                <button style={styles.modalBtn} onClick={() => setStep(3)}>
                                    I have completed the payment
                                </button>
                            </div>
                        )}
                        {step === 3 && (
                            <div style={styles.modalContent}>
                                <div style={styles.successIcon}>✓</div>
                                <h3 style={styles.modalTitle}>Payment Successful</h3>
                                <p style={styles.text}>
                                    Thank you for purchasing the <strong>{selectedPlan.name}</strong> package. I will reach out to you shortly.
                                </p>
                                <button style={styles.modalBtn} onClick={closeModal}>Close</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

const styles = {
    cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '2rem',
    },
    card: {
        backgroundColor: 'var(--surface-color)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        padding: '2rem',
        maxWidth: '350px', // Adjusted for 3 columns
        width: '100%',
        textAlign: 'center',
        transition: 'transform 0.3s ease, border-color 0.3s',
        display: 'flex',
        flexDirection: 'column',
    },
    cardHeader: {
        marginBottom: '1.5rem',
        borderBottom: '1px solid var(--border-color)',
        paddingBottom: '1.5rem',
    },
    serviceName: {
        fontSize: '1.25rem',
        marginBottom: '0.5rem',
        color: 'var(--text-primary)',
    },
    price: {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#00ff41',
        lineHeight: 1,
    },
    currency: {
        fontSize: '1.2rem',
        verticalAlign: 'top',
        marginRight: '0.2rem',
        color: 'var(--text-primary)',
    },
    features: {
        textAlign: 'left',
        marginBottom: '2rem',
        lineHeight: '2',
        color: 'var(--text-secondary)',
        flexGrow: 1,
        paddingLeft: '1.2rem',
    },
    button: {
        width: '100%',
        padding: '0.8rem',
        backgroundColor: 'transparent',
        color: '#00ff41',
        fontWeight: '600',
        borderRadius: '6px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'all 0.2s',
        border: '1px solid #00ff41',
        marginTop: 'auto',
    },
    // Modal Styles (Kept mostly same, adjusted mostly strictly logical)
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.8)',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2000,
    },
    modal: {
        backgroundColor: '#111',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        padding: '2rem',
        width: '90%',
        maxWidth: '450px',
        position: 'relative',
    },
    closeBtn: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        fontSize: '1.5rem',
        color: 'var(--text-secondary)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
    },
    modalContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    modalTitle: {
        fontSize: '1.5rem',
        marginBottom: '0.2rem',
        color: 'var(--text-primary)',
    },
    modalSubtitle: {
        color: 'var(--text-secondary)',
        marginBottom: '1rem',
    },
    input: {
        padding: '0.8rem',
        backgroundColor: '#000',
        border: '1px solid var(--border-color)',
        borderRadius: '4px',
        color: 'white',
        fontFamily: 'inherit',
        width: '100%',
    },
    modalBtn: {
        padding: '0.8rem',
        backgroundColor: '#00ff41',
        color: '#000',
        fontWeight: '600',
        borderRadius: '4px',
        marginTop: '1rem',
        cursor: 'pointer',
        border: 'none',
    },
    paymentMethods: {
        display: 'flex',
        gap: '1rem',
        marginBottom: '0.5rem',
    },
    method: {
        flex: 1,
        padding: '0.5rem',
        textAlign: 'center',
        border: '1px solid var(--border-color)',
        borderRadius: '4px',
        color: 'var(--text-secondary)',
        cursor: 'pointer',
        fontSize: '0.8rem',
    },
    methodActive: {
        flex: 1,
        padding: '0.5rem',
        textAlign: 'center',
        border: '1px solid #00ff41',
        borderRadius: '4px',
        color: '#00ff41',
        cursor: 'pointer',
        fontSize: '0.8rem',
        backgroundColor: 'rgba(0,255,65,0.05)',
    },
    cardForm: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    successIcon: {
        fontSize: '3rem',
        color: '#00ff41',
        textAlign: 'center',
        marginBottom: '1rem',
    },
    text: {
        color: 'var(--text-secondary)',
        lineHeight: '1.5',
    },
    cryptoAddress: {
        padding: '1rem',
        backgroundColor: '#000',
        borderRadius: '6px',
        border: '1px solid var(--border-color)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        color: 'var(--text-secondary)',
        wordBreak: 'break-all',
    },
    paypalBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '1rem',
        backgroundColor: '#0070ba',
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: '6px',
        textDecoration: 'none',
        fontSize: '1rem',
        transition: 'background-color 0.2s',
        marginBottom: '0.5rem',
    }
};

export default Services;
