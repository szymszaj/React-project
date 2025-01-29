import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Label from "../src/components/Label";

describe("Label component", () => {
  it("renders with correct text", () => {
    render(<Label text="Test Label" />);
    const labelElement = screen.getByText(/Test Label/i);
    expect(labelElement).toBeInTheDocument();
  });

  it("applies correct className", () => {
    render(<Label text="Test Label" className="test-class" />);
    const labelElement = screen.getByText(/Test Label/i);
    expect(labelElement).toHaveClass("test-class");
  });

  it("renders without crashing", () => {
    const { container } = render(<Label text="Test Label" />);
    expect(container).toBeDefined();
  });

  it("renders with default text when no text prop is provided", () => {
    render(<Label />);
    const labelElement = screen.getByText(/Default Label/i);
    expect(labelElement).toBeInTheDocument();
  });
});
