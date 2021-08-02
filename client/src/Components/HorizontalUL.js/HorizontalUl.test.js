import { render } from "@testing-library/react";
import toHaveStyle from "@testing-library/jest-dom";

import HorizontalUL from ".";

describe("Ul component that should display li's horizontally", () => {
    test("It renders and has display of flex", () => {

        const { getByText } = render(
            <HorizontalUL>
                <li>Test</li>
                <li>Test2</li>
            </HorizontalUL>
        );

        const li = getByText("Test");
        getByText("Test2");
    });
});