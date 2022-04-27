import React from 'react';
import "../Style/Articles.css"
import currency from "../Assets/Images/image-currency.jpg"
import restaurant from "../Assets/Images/image-restaurant.jpg"
import plane from "../Assets/Images/image-plane.jpg"
import confetti from "../Assets/Images/image-confetti.jpg"

export default function Articles(props) {
    return (
        <section className="articles">
            <h2>
                Latest Articles
            </h2>
            <div className="articles-grid-container">
                <div className="grid-card__articles">
                    <img src={currency} alt="currency" />
                    <div className="card-content">
                        <p>
                            By Claire Robinson
                        </p>
                        <h5>
                            Receive money in any
                            currency with no fees
                        </h5>
                        <p>
                            The world is getting smaller and we're becoming
                            more mobile. So why should you be forced to only
                            receive money in a single ...
                        </p>
                    </div>
                </div>
                <div className="grid-card__articles">
                    <img src={restaurant} alt="restaurant" />
                    <div className="card-content">
                        <p>
                            By Wilson Hutton
                        </p>
                        <h5>
                            Treat yourself without
                            worrying about money

                        </h5>
                        <p>
                            Our simple budgeting feature
                            allows you to separate out your
                            spending and set realistic limits
                            each month. That means you ...
                        </p>
                    </div>
                </div>
                <div className="grid-card__articles">
                    <img src={plane} alt="plane" />
                    <div className="card-content">
                        <p>By Wilson Hutton</p>
                        <h5>Take your Easybank card
                            wherever you go</h5>
                        <p>
                            We want you to enjoy your travels.
                            This is why we don't charge any
                            fees on purchases while you're
                            abroad. We'll even show you ...
                        </p>
                    </div>
                </div>
                <div className="grid-card__articles">
                    <img src={confetti} alt="confetti" />
                    <div className="card-content">
                        <p>
                            By Claire Robinson
                        </p>
                        <h5>
                            Our invite-only Beta
                            accounts are now live!
                        </h5>
                        <p>
                            After a lot of hard work by the
                            whole team, we're excited to launch
                            our closed beta. It's easy to 
                            request an invite through the site ...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
