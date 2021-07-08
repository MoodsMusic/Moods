import React from 'react';

const Home = () => {
    return (
        <main className="home">
            <header>
                <h1 className="text-center">#MOODS</h1>
                <p className="text-center">A Social Media Music Platform</p>
            </header>
            {/* Div for background image */}
            <div className="hero">
                <div className="arrow-down">
                    <i className="fas fa-arrow-alt-circle-down"></i>
                </div>
            </div>

            <section className="section1">
                <h2 className="text-center">Music</h2>
                <div>
                    <div className="left-col">

                    </div>
                    <div className="right-col">

                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;