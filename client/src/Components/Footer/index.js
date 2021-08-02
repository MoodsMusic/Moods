import React from 'react';
import { useLocation } from "react-router-dom";
import HorizontalUL from '../HorizontalUL.js';
import Li from '../Li/index.js';
import "./style.css";

const Footer = () => {

    // Variable to store page location from react-broswer-dom.
    let location = useLocation();
    if (location.pathname === "/") location = "home";
    else location = "default";

    return (
        <footer className={`footer footer-${location}`}>
            <h4>#Moods</h4>
            <HorizontalUL>
                <Li color={"#fff"} >
                    Information
                    <ul>
                        <Li color={"#fff"} cursor={"pointer"}>
                            About Us
                        </Li>
                        <Li color={"#fff"} cursor={"pointer"}>
                            Partnerships
                        </Li>
                        <Li color={"#fff"} cursor={"pointer"}>
                            Subscriptions
                        </Li>
                        <Li color={"#fff"} cursor={"pointer"}>
                            FAQ
                        </Li>
                    </ul>
                </Li>
                <Li color={"#fff"} >
                    Locations
                    <ul>
                        <Li color={"#fff"} cursor={"pointer"}>
                            Find Us
                        </Li>
                    </ul>
                </Li>
                <Li color={"#fff"} >
                    Careers
                    <ul>
                        <Li color={"#fff"} cursor={"pointer"}>
                            Technology
                        </Li>
                        <Li color={"#fff"} cursor={"pointer"}>
                            IT Support
                        </Li>
                        <Li color={"#fff"} cursor={"pointer"}>
                            Marketing
                        </Li>
                        <Li color={"#fff"} cursor={"pointer"}>
                            Design
                        </Li>
                    </ul>
                </Li>
                <Li color={"#fff"} >
                    Contact Us
                    <ul>
                        <Li color={"#fff"} cursor={"pointer"}>
                            Email form
                        </Li>
                        <Li color={"#fff"} cursor={"pointer"}>
                            Phone
                        </Li>
                    </ul>
                </Li>
            </HorizontalUL>

            <p className="text-center mt-30">Made with React</p>
        </footer>
    );
};

export default Footer;