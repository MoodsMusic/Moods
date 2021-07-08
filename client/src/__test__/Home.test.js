import { render } from "@testing-library/react";
import toBeInTheDocument from "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "../Pages/Home";

describe("Home page", () => {
    test("It should render", () => {
        const { getByText } = render(
            <Router><Home /></Router>
        );

        getByText("#MOODS");
        getByText("A Social Media Music Platform");

        expect(document.querySelector("header")).toBeInTheDocument();
    });
});