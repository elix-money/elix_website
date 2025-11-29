import React, { useState } from 'react';

const NewsletterModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Handle newsletter signup
        console.log('Newsletter signup:', email);
        setEmail('');
        onClose();
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-wrapper">
                <button className="modal-close" onClick={onClose} aria-label="Close">
                    ×
                </button>
                <div className="modal-content">
                    <h2 className="modal-title">Follow our journey</h2>
                    <p className="modal-subtitle">
                        Be the first to hear what we're building and where we're headed.
                    </p>

                    <form onSubmit={handleSubmit} className="modal-form">
                        <div className="modal-input-wrapper">
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="modal-input"
                            />
                            <button type="submit" className="modal-button">
                                Get updates
                            </button>
                        </div>
                    </form>

                    <p className="modal-disclaimer">
                        Elix is not yet authorised by SEBI/RBI. This is not an invitation or inducement to apply for a financial service.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsletterModal;
