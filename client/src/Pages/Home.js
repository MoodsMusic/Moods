import React, { useEffect } from 'react';
import Section from '../Conponents/Section';

const Home = () => {

    useEffect(() => {
        // Observer for text highlight animations
        const wrapper = document.getElementById("highlight-effect");
        const className = "in-view";

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        wrapper.classList.add(className);
                        return;
                    }
                    wrapper.classList.remove(className);
                });
            },
        );

        observer.observe(wrapper);

        // Observer for text sliding
        const ps = document.querySelectorAll(".highlight");
        const className2 = "slide";

        const observer2 = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(className2);
                        return;
                    }
                    entry.target.classList.remove(className2);
                });
            },
        );

        ps.forEach((p) => {
            observer2.observe(p.parentElement.parentElement);
        });
    }, []);

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

            <Section sectionNum={"section1"}>
                <h2 className="text-center">Music</h2>
                <div id="highlight-effect">
                    <div className="left-col">
                        <p><span className="highlight">Search for songs from our collection...</span></p>
                        <p><span className="highlight">Listen to music...</span></p>
                        <p><span className="highlight">Share your feelings or thoughts</span></p>
                    </div>
                    <div className="right-col">
                        <p><span className="highlight">Create several playlists</span></p>
                        <p><span className="highlight">Add songs to playlists</span></p>
                        <p><span className="highlight">Share playlists with friends</span></p>
                    </div>
                </div>
            </Section>

            <Section sectionNum={"section2"}>
                <p className="text-center">Create posts or diary entries.</p>
            </Section>
        </main>
    );
};

export default Home;