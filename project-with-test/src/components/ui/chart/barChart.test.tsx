import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BarChartComponent } from "./barChart";
import "@testing-library/jest-dom";

describe("BarChartComponent", () => {
  it("renders the correct number of bars", () => {
    render(<BarChartComponent />);
    const bars = screen.getAllByRole("img", { hidden: true });
    expect(bars).toHaveLength(5);
  });
});
