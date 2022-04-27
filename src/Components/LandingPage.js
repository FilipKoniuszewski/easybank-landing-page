import React from 'react';
import Intro from "./Intro";
import Features from "./Features";
import Articles from "./Articles";

export default function LandingPage(props) {
    return (
        <main>
            <Intro />
            <Features />
            <Articles />
        </main>
    );
}

