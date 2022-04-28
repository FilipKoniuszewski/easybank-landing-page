import React from 'react';
import banking from "../Assets/Images/icon-online.svg";
import budget from "../Assets/Images/icon-budgeting.svg";
import onboard from "../Assets/Images/icon-onboarding.svg";
import api from "../Assets/Images/icon-api.svg";
import "../Style/Features.css"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Features(props) {
    return (
        <section className="features">
            <h2>
                Why choose Easybank?
            </h2>
            <p>
                We leverage Open Banking to turn your
                bank account into your financial hub.
                Control your finances like never before.
            </p>
            <div className="features-grid-container">
                <div className="grid-card">
                    <img src={banking} alt="online-banking" />
                    <h4>Online Banking</h4>
                    <p>
                        Our modern web and mobile applications
                        allow you to keep track of your finances
                        wherever you are in the world.
                    </p>
                </div>
                <div className="grid-card">
                    <img src={budget} alt="online-banking" />
                    <h4>Simple Budgeting</h4>
                    <p>
                        See exactly where your money goes each month.
                        Receive notifications when you’re close to
                        hitting your limits.
                    </p>
                </div>
                <div className="grid-card">
                    <img src={onboard} alt="online-banking" />
                    <h4>Fast Onbarding</h4>
                    <p>
                        We don’t do branches. Open your account in
                        minutes online and start taking control of
                        your finances right away.
                    </p>
                </div>
                <div className="grid-card">
                    <img src={api} alt="online-banking" />
                    <h4>Open API</h4>
                    <p>
                        Manage your savings, investments, pension,
                        and much more from one account. Tracking your
                        money has never been easier.
                    </p>
                </div>
            </div>
        </section>
    );
}
