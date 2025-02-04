import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CreditCard } from "./card";
import "@testing-library/jest-dom";

describe("CreditCard Component", () => {
  it("renders without crashing", () => {
    render(<CreditCard />);
    expect(screen.getByText("Revolut")).toBeInTheDocument();
  });

  it("displays card holder name", () => {
    render(<CreditCard />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("displays card number", () => {
    render(<CreditCard />);
    expect(screen.getByText("1234 5678 9012 3456")).toBeInTheDocument();
  });

  it("displays expiration date", () => {
    render(<CreditCard />);
    expect(screen.getByText("12/24")).toBeInTheDocument();
  });

  it("displays CVV", () => {
    render(<CreditCard />);
    expect(screen.getByText("CVV: 123")).toBeInTheDocument();
  });

  it("flips the card on click", () => {
    render(<CreditCard />);
    const cardElement = screen.getByText("Revolut").closest("div");
    if (cardElement) {
      fireEvent.click(cardElement);
      expect(cardElement).toHaveClass("rotate-y-180");
    }
  });
});
