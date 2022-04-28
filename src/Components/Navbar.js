import React, {useEffect, useRef, useState} from 'react';
import "../Style/Navbar.css"
import logo from "../Assets/Images/logo.svg"
import hamburgerIcon from "../Assets/Images/icon-hamburger.svg";
import closeIcon from "../Assets/Images/icon-close.svg";

export default function Navbar(props) {
    
    const [isNavbarToggle, setIsNavbarToggle] = useState(false)
    
    const menuRef = useRef(null)

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (isNavbarToggle && menuRef.current && !menuRef.current.contains(e.target)) {
                setIsNavbarToggle(false);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [isNavbarToggle]);
    
    return (
        <>
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
                <div className="burger-toggle" onClick={() => setIsNavbarToggle(!isNavbarToggle)}>
                    <img src={isNavbarToggle ? closeIcon : hamburgerIcon} alt={`${isNavbarToggle ? 'closeIcon' : 'hamburgerIcon'}`}  />
                </div>
            </header>
            <div ref={menuRef} className={`${isNavbarToggle ? 'navbar-toggle-active' : 'navbar-toggle-inactive'} navbar-toggle-container`}>
                <div className="toggle-home">
                    Home
                </div>
                <div className="toggle-about">
                    About
                </div>
                <div className="toggle-contact">
                    Contact
                </div>
                <div className="toggle-blog">
                    Blog
                </div>
                <div className="toggle-careers">
                    Careers
                </div>
            </div>
        </>
       
    );
}
