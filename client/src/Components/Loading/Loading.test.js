import { render } from "@testing-library/react";

import Loading from "./index";

describe("Loading component", () => {
    test("It renders", () => {
        const { getByText } = render(<Loading />);

        getByText("Loading...");
    });
});