import React, { useState } from 'react';

const Services = () => {
    const [showModal, setShowModal] = useState(false);
    const [step, setStep] = useState(1); // 1: Details, 2: Payment, 3: Success
    const [selectedPlan, setSelectedPlan] = useState(null);

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
                                    <div style={styles.methodActive}>Credit Card</div>
                                    <div style={styles.method}>Crypto (ETH/BTC)</div>
                                </div>
                                <div style={styles.cardForm}>
                                    <input type="text" placeholder="Card Number (Mock)" style={styles.input} />
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <input type="text" placeholder="MM/YY" style={styles.input} />
                                        <input type="text" placeholder="CVC" style={styles.input} />
                                    </div>
                                </div>
                                <button style={styles.modalBtn} onClick={() => setStep(3)}>
                                    Pay ${selectedPlan.price}.00
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
    }
};

export default Services;
