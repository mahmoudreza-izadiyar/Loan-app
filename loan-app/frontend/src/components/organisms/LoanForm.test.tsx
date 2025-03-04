import { render, screen } from "@testing-library/react";
import LoanForm from "./LoanForm";
import { describe, it, expect } from "vitest";

describe("LoanForm component", () => {
  it("renders LoanForm component", () => {
    render(<LoanForm onResults={() => {}} />);
    expect(screen.getByText(/apply/i)).toBeInTheDocument();
  });
});
