import { render, screen } from "@testing-library/react";
import StringCalculator from "./index";

describe("StringCalculator Component", () => {
  test("renders string calculator title", () => {
    render(<StringCalculator />);
    expect(screen.getByText("String Calculator")).toBeInTheDocument();
  });
});
