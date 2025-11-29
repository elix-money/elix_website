import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-gradient-top"></div>
            <div className="footer-content">
                <img src={logo} alt="elix" className="footer-logo" />

                <div className="footer-copyright">
                    <span>© Elix </span>
                    <Link to="/terms" className="footer-link">Terms</Link>
                    <span> & </span>
                    <Link to="/privacy" className="footer-link">Privacy</Link>
                </div>

                <p className="footer-disclaimer">
                    Elix is not yet authorised by the SEBI/RBI. Prior to Elix becoming authorised, none of the information provided is intended as an invitation or inducement to apply for any ELIX product or service. All content is for informational purposes only and does not constitute financial advice. Tenchiview Technologies Private Limited is a company registered in India with CIN U65990AP2024PTC214571. Our registered office is located at D NO. 18-74/2, Gopalapatri, Gopalapuram, Visakhapatnam (Urban), Visakhapatnam-530027, Andhra Pradesh
                </p>
            </div>
        </footer>
    );
};

export default Footer;
