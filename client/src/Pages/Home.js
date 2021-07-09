import React, { useEffect } from 'react';
import HorizontalUL from '../Conponents/HorizontalUL.js';
import Li from '../Conponents/Li.js/index.js';
import Section from '../Conponents/Section';

// Handle if li elements are clicked for style change
const handleClickEvent = (e) => {
    e.preventDefault();
    console.log(e);
    const liList = document.querySelectorAll(".h-ul .li");
    liList.forEach((li) => {
        if (li === e.target) {
            li.classList.add("active");
        } else {
            if (li.classList.contains("active")) li.classList.remove("active");
        }
    });
};

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
                        <p><span className="highlight">Search for songs from our collection</span></p>
                        <p><span className="highlight">Listen to music</span></p>
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
                <h2 className="text-center">Features</h2>

                <HorizontalUL>
                    <Li cursor={"pointer"} color={"rgb(0, 68, 255)"} onClickEvent={handleClickEvent}>Songs</Li>
                    <Li cursor={"pointer"} color={"rgb(0, 68, 255)"} onClickEvent={handleClickEvent}>Playlists</Li>
                    <Li cursor={"pointer"} color={"rgb(0, 68, 255)"} onClickEvent={handleClickEvent}>Post</Li>
                    <Li cursor={"pointer"} color={"rgb(0, 68, 255)"} onClickEvent={handleClickEvent}>Connect</Li>
                </HorizontalUL>

            </Section>
        </main>
    );
};

export default Home;