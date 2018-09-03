import React from 'react';

const LandingPage = () => {
    return (
        <section id="home" className="landingPage">
            <div className="wrapper">
                <h1>THIS IS REAL LIFE</h1>
                <h2>discover documentaries</h2>
                <div>
                    <button className="start" onClick=""><a href="#categories"><span className="hoverReveal"><i class="fas fa-video"></i></span>Start Now</a></button>
                </div>
            </div>
        </section>
    )
}

export default LandingPage;

//Photo by Joshua Hanks on Unsplash