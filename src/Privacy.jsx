import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import Footer from './Footer';

const Privacy = ({ openModal }) => {
    return (
        <div className="terms-page">
            <header className="terms-header">
                <div className="terms-header-content">
                    <Link to="/">
                        <img src={logo} alt="elix" className="terms-logo" />
                    </Link>
                    <button onClick={openModal} className="terms-cta-button">Get Updates</button>
                </div>
            </header>

            <main className="terms-content">
                <h1>Privacy Policy</h1>

                <p className="terms-intro">
                    We care about your privacy. This policy explains how we handle your personal information when you visit our website or join our newsletter.
                </p>

                <section className="terms-section">
                    <h2>What we collect</h2>
                    <ol>
                        <li>1. Email address (when you subscribe to our newsletter).</li>
                        <li>2. Analytics data (page views, clicks, and events).</li>
                    </ol>
                </section>

                <section className="terms-section">
                    <h2>How we use it</h2>
                    <ol>
                        <li>1. To send you updates and announcements via email.</li>
                        <li>2. To understand how people use our site and improve the experience.</li>
                    </ol>
                </section>

                <section className="terms-section">
                    <h2>Who we share with</h2>
                    <p>We store personal information on our own systems and with trusted service providers who help us operate our service (such as cloud hosting and analytics providers).</p>
                    <p>We never sell your data.</p>
                </section>

                <section className="terms-section">
                    <h2>Your rights</h2>
                    <p>If you're in India, you have the right to access, delete, or correct your data. You can unsubscribe from emails at any time.</p>
                    <p className="contact-info">
                        To exercise your rights, contact us at: <strong>hello@elix.money</strong>
                    </p>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Privacy;
