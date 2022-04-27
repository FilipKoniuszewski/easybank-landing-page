import React from 'react';
import "../Style/Intro.css"
import mockups from "../Assets/Images/image-mockups.png"

export default function Intro(props) {
    return (
        <section className="intro">
            <div className="intro-text">
                <h1>
                    Next generation digital banking
                </h1>
                <p>
                    Take your financial life online. 
                    Your Easybank account will be a 
                    one-stop-shop for spending, saving, 
                    budgeting, investing, and much more.
                </p>
                <div className="request-invite">
                    Request Invite
                </div>
            </div>
            <div className="mockups-container">
                <img src={mockups} alt="mockups" />
            </div>
        </section>
    );
}
