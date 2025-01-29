import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../src/components/Button";

describe("Button component", () => {
  test("renders the button with correct text", () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Click me</Button>
    );
    fireEvent.click(getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders with correct className", () => {
    const { getByText } = render(<Button className="primary">Click me</Button>);
    expect(getByText("Click me")).toHaveClass("primary");
  });

  test("is disabled when disabled prop is true", () => {
    const { getByText } = render(<Button disabled>Click me</Button>);
    expect(getByText("Click me")).toBeDisabled();
  });
});
