import React from 'react';
import './index.css';
import logo from './assets/logo.png';
import Footer from './Footer';

function Home({ openModal }) {
    return (
        <>
            <div className="container">
                <header>
                    <img src={logo} alt="elix" className="logo" />
                </header>

                <main>
                    <h1>
                        Build a future<br />
                        without limits.
                    </h1>

                    <p className="subtitle">
                        Building an personal finance AI assistant for how we live and grow.
                    </p>

                    <div className="waitlist-form">
                        <div className="input-wrapper">
                            <input type="email" placeholder="Enter email address" />
                            <button type="button" onClick={openModal}>Get updates</button>
                        </div>
                        <p className="newsletter-text">Subscribe to our newsletter</p>
                    </div>
                </main>
            </div>

            <Footer />

            <div className="video-background">
                <video autoPlay loop muted playsInline>
                    <source src="/Video_Generation_From_Description.mp4" type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
            </div>
        </>
    );
}

export default Home;
