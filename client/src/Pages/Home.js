import React, { useEffect, useReducer } from 'react';
import HorizontalUL from '../Conponents/HorizontalUL.js';
import Info from '../Conponents/Info/index.js';
import Li from '../Conponents/Li.js/index.js';
import Section from '../Conponents/Section';

// Handle if li elements are clicked for style change
const handleClickEvent = (e) => {
    e.preventDefault();

    // Loop through li's and determine which is active
    const liList = document.querySelectorAll(".h-ul .li");
    liList.forEach((li) => {
        if (li === e.target) {
            li.classList.add("active");
        } else {
            if (li.classList.contains("active")) li.classList.remove("active");
        }
    });
};

const reducer = (state, action) => {
    switch (action.type) {
        case "Songs":
            return {
                ...state,
                subject: "Songs and Music",
                desc: "You can search our library of music based on artists or song titles. Our collection includes hundreds of songs to choose from including some of the latest hits."
            };
        case "Playlists":
            return {
                ...state,
                subject: "User Playlists",
                desc: `Registered users will be able to create multiple playlists to add all their favorite songs to.
                Playlists can be shared with your friends so you can experience each other's musical interests.`
            }
        case "Post":
            return {
                ...state,
                subject: "Create Posts",
                desc: `Ever feel inspired by a certain song just to eventually forgot it? 
                This app aims to make sure that never happens again by allowing you not only to save songs and playlists, but posts about the song with a linkage to the song.`
            };
        case "Connect":
            return {
                ...state,
                subject: "Create Connections",
                desc: `#Moods aims to create a friendly environment for people to make new connections or another way to connect with friends and family.
                Search users and add them as a friend. If they have public posts and playlists, check out their interests and share what you think!`
            };
        default:
            return state;
    }
};

const initialState = {
    subject: "Songs and Music",
    desc: "You can search our library of music based on artists or song titles. Our collection includes hundreds of songs to choose from including some of the latest hits."
}

const Home = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

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
                    <Li cursor={"pointer"} color={"rgb(0, 68, 255)"} onClickEvent={[handleClickEvent, dispatch]} actionType={"Songs"}>Songs</Li>
                    <Li cursor={"pointer"} color={"rgb(0, 68, 255)"} onClickEvent={[handleClickEvent, dispatch]} actionType={"Playlists"}>Playlists</Li>
                    <Li cursor={"pointer"} color={"rgb(0, 68, 255)"} onClickEvent={[handleClickEvent, dispatch]} actionType={"Post"}>Post</Li>
                    <Li cursor={"pointer"} color={"rgb(0, 68, 255)"} onClickEvent={[handleClickEvent, dispatch]} actionType={"Connect"}>Connect</Li>
                </HorizontalUL>

                <Info>
                    <h3>
                        {state.subject}
                    </h3>
                    <p>
                        {state.desc}
                    </p>
                    <img src="https://via.placeholder.com/250" alt="placeholder" />
                </Info>

            </Section>
        </main>
    );
};

export default Home;