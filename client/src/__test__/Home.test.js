import { render } from "@testing-library/react";
import toBeInTheDocument from "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "../Pages/Home";

// Mock the intersection observer
global.IntersectionObserver = class IntersectionObserver {
    constructor() { }

    disconnect() {
        return null;
    }

    observe() {
        return null;
    }

    takeRecords() {
        return null;
    }

    unobserve() {
        return null;
    }
};

describe("Home page", () => {
    test("It should render", () => {
        const { getByText } = render(
            <Router><Home /></Router>
        );

        getByText("#MOODS");
        getByText("A Social Media Music Platform");
        getByText("Features");
        getByText("Songs");
        getByText("Playlists");
        getByText("Post");
        getByText("Connect");

        expect(document.querySelector("header")).toBeInTheDocument();
    });

    test("It should change features when list items are clicked", () => {
        const { getByText, queryByText } = render(
            <Router><Home /></Router>
        );

        getByText("#MOODS");
        // Default song feature
        getByText("Songs and Music");
        getByText(/You can search our library of music/);

        const playlists = getByText("Playlists");
        userEvent.click(playlists);

        getByText("User Playlists");
        getByText(/Registered users will be able to create multiple/);
        // Default text should not be there
        expect(queryByText("Songs and Music")).not.toBeInTheDocument();

        const post = getByText("Post");
        userEvent.click(post);

        getByText("Create Posts");
        getByText(/Ever feel inspired by a certain song/);
        expect(queryByText("User Playlists")).not.toBeInTheDocument();

        const connect = getByText("Connect");
        userEvent.click(connect);

        getByText("Create Connections");
        getByText(/#Moods aims to create/);
        expect(queryByText("Create Posts")).not.toBeInTheDocument();
    });
});