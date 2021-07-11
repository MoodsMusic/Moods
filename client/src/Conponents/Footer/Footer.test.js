import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./index";

console.error = jest.fn();

describe("Footer component", () => {
    test("It should render", () => {
        jest.mock("react-router-dom", () => ({
            ...jest.requireActual("react-router-dom"),
            useLocation: () => ({
                pathname: "/home"
            })
        }));

        const { getByText } = render(
            <Router>
                <Footer />
            </Router>
        );

        getByText("#Moods");
        getByText("Information");
        getByText("Locations");
        getByText("Careers");
        getByText("Contact Us");
    });
});