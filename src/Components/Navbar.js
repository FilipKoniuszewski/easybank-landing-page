import React from 'react';
import "../Style/Navbar.css"
import logo from "../Assets/Images/logo.svg"

export default function Navbar(props) {
    return (
        <header className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav className="nav__links">
                <div className="to-features">
                    Home
                </div>
                <div className="to-demo">
                    About
                </div>
                <div className="to-team">
                    Contact
                </div>
                <div className="to-sign-in">
                    Blog
                </div>
                <div className="to-Careers">
                    Careers
                </div>
            </nav>
            <div className="request-invite">
                Request Invite
            </div>
            
        </header>
    );
}
