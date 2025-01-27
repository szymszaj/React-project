import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import MyComponent from "../src/MyComponent";

describe("MyComponent", () => {
  it("should render the button", () => {
    render(<MyComponent />);
    const button = screen.getByRole("button", { name: /my test button/i });
    expect(button).toBeInTheDocument();
  });

  it("should call the onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<MyComponent onClick={handleClick} />);
    const button = screen.getByRole("button", { name: /my test button/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should have the correct initial text", () => {
    render(<MyComponent />);
    const button = screen.getByRole("button", { name: /my test button/i });
    expect(button).toHaveTextContent("My Test Button");
  });
});
