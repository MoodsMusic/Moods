import { render } from "@testing-library/react";

import Footer from "./index";

describe("Footer component", () => {
    test("It should render", () => {
        const { getByText } = render(<Footer />);

        getByText("#Moods");
        getByText("Information");
        getByText("Locations");
        getByText("Careers");
        getByText("Contact Us");
    });
});