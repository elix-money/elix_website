import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import Footer from './Footer';

const Terms = ({ openModal }) => {
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
                <h1>Terms of use</h1>

                <section className="terms-section">
                    <h2>What we provide</h2>
                    <p>This site gives general information about Elix and lets you join our newsletter.</p>
                </section>

                <section className="terms-section">
                    <h2>Not financial advice</h2>
                    <p>Content on this site are for informational purposes only. They are not financial, investment, tax, or legal advice. Elix is not yet authorised by the SEBI/RBI. You should not rely on anything here to make financial decisions.</p>
                </section>

                <section className="terms-section">
                    <h2>Acceptable use</h2>
                    <p>Don't misuse the site or upload unlawful or harmful content. We may suspend access if you abuse the service.</p>
                </section>

                <section className="terms-section">
                    <h2>Intellectual property</h2>
                    <p>All content on this site (text, images, brand) belongs to Moneybrew Technologies Private Limited. Please don't copy or redistribute without permission.</p>
                </section>

                <section className="terms-section">
                    <h2>Liability</h2>
                    <p>The site is provided "as is." We make no guarantees and accept no liability for your use of it.</p>
                </section>

                <section className="terms-section">
                    <h2>Disclaimer</h2>
                    <p>Elix is currently in development.</p>
                    <ol>
                        <li>1. Nothing on this site constitutes regulated financial advice.</li>
                        <li>2. Any financial services will only be provided once Elix is authorised by the SEBI/RBI.</li>
                    </ol>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Terms;
