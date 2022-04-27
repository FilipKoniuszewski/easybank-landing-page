import React from 'react';
import logo from "../Assets/Images/logo.svg"
import facebook from "../Assets/Images/icon-facebook.svg";
import youtube from "../Assets/Images/icon-youtube.svg";
import twitter from "../Assets/Images/icon-twitter.svg";
import pinterest from "../Assets/Images/icon-pinterest.svg";
import instagram from "../Assets/Images/icon-instagram.svg";
import "../Style/Footer.css";

export default function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-content-nav">
                    <div className="footer-socials">
                        <div>
                            <img src={logo} alt="logo" /><span>easybank</span>
                        </div>
                        <div className="socials">
                            <img src={facebook} alt="facebook" />
                            <img src={youtube} alt="youtube" />
                            <img src={twitter} alt="twitter" />
                            <img src={pinterest} alt="pinterest" />
                            <img src={instagram} alt="instagram" />
                        </div>
                    </div>
                    <div className="footer-nav-1">
                        <div className="about-us">
                            About Us
                        </div>
                        <div className="contact">
                            Contact
                        </div>
                        <div className="blog">
                            Blog
                        </div>
                    </div>
                    <div className="footer-nav-2">
                        <div className="careers">
                            Careers
                        </div>
                        <div className="support">
                            Support
                        </div>
                        <div className="privacy-policy">
                            Privacy Policy
                        </div>
                    </div>
                </div>
                <div className="footer-request-invite">
                    <div className="request-invite">
                        Request Invite
                    </div>
                    <div className="all-rights">
                        &#169; Easybank. All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    );
}
