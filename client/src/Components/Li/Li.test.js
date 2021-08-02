import { render } from "@testing-library/react";
import toHaveStyle from "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import Li from ".";

describe("List item component Li", () => {
    test("It renders with default styling", () => {
        const { getByText } = render(
            <ul>
                <Li>Test</Li>
                <Li>Test2</Li>
            </ul>
        );

        getByText("Test");
        const li = getByText("Test2");

        expect(li).toHaveStyle("color: rgb(0, 0, 0)");
        expect(li).toHaveStyle("cursor: auto");
    });

    test("Renders with dynamic stylings", () => {
        const { getByText } = render(
            <ul>
                <Li color={"blue"} cursor={"pointer"}>Test</Li>
                <Li>Test2</Li>
            </ul>
        );

        const li = getByText("Test");

        expect(li).toHaveStyle("color: blue");
        expect(li).toHaveStyle("cursor: pointer");
    });

    test("It passes click events correctly", () => {
        const dummyFn = jest.fn();
        const dummyFn2 = jest.fn();

        const { getByText } = render(
            <ul>
                <Li color={"blue"} cursor={"pointer"} onClickEvent={[dummyFn, dummyFn2]}>Test</Li>
                <Li>Test2</Li>
            </ul>
        );

        const li = getByText("Test");

        userEvent.click(li);

        expect(dummyFn).toHaveBeenCalledTimes(1);
    });
});