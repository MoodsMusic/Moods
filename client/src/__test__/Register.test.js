import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "../Pages/Register";

describe("Register page", () => {
    test("It renders and doesnt show nav login", () => {
        const { getByText } = render(
            <Register />
        );

        getByText("Sign Up");
        getByText("First Name");
        getByText("Last Name");
        getByText("Username");
        getByText("Email Address");
        getByText("Password");
    });

    test("Can enter information", () => {
        render(
            <Register />
        );

        const fName = document.getElementById("firstName");
        const lName = document.getElementById("lastName");
        const username = document.getElementById("username");
        const password = document.getElementById("password");
        const email = document.getElementById("email");

        userEvent.type(fName, "Jest first");
        userEvent.type(lName, "Jest last");
        userEvent.type(username, "Jest username");
        userEvent.type(password, "Jest password");
        userEvent.type(email, "Jest@mail.com");

        expect(fName.value).toBe("Jest first");
        expect(lName.value).toBe("Jest last");
        expect(username.value).toBe("Jest username");
        expect(password.value).toBe("Jest password");
        expect(email.value).toBe("Jest@mail.com");
    });
});