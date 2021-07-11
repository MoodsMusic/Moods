import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Login from "../Pages/Login";

describe("Login page", () => {
    test("It renders", () => {
        const { getByText } = render(
            <Login />
        );

        getByText("Sign In");
        getByText("Email Address");
        getByText("Password");
    });

    test("Text enters form correctly", () => {
        const { getByText } = render(
            <Login />
        );

        userEvent.type(document.getElementById("email"), "Jest test typing");
        userEvent.type(document.getElementById("password"), "Jest password");

        expect(document.getElementById("email").value).toBe("Jest test typing");
        expect(document.getElementById("password").value).toBe("Jest password");
    });
});