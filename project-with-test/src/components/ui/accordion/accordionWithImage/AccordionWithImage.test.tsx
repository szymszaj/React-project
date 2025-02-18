import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect } from "vitest";
import AccordionWithImage from "./AccordionWithImage";
import "@testing-library/jest-dom";
import test from "node:test";

describe("AccordionWithImage", () => {
  test("renders the title and content correctly", () => {
    render(
      <AccordionWithImage
        title="Test Title"
        content="Test Content"
        imageUrl="/test.jpg"
        imageAlt="Test Image"
      />
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();

    expect(screen.queryByText("Test Content")).not.toBeVisible();

    fireEvent.click(screen.getByText("Test Title"));

    expect(screen.getByText("Test Content")).toBeVisible();

    const image = screen.getByAltText("Test Image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/test.jpg");
  });
});
