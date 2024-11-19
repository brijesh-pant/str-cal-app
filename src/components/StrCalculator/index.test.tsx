import { render, screen, fireEvent } from "@testing-library/react";
import StringCalculator from "./index";
import strCalculator from "../../utils";

jest.mock("../../utils");

describe("StringCalculator Component", () => {
  beforeEach(() => {
    (strCalculator as jest.Mock).mockClear();
  });

  test("renders string calculator title", () => {
    render(<StringCalculator />);
    expect(screen.getByText("String Calculator")).toBeInTheDocument();
  });

  test("renders input field with correct placeholder", () => {
    render(<StringCalculator />);
    expect(
      screen.getByPlaceholderText("Enter numbers (e.g., 1,2,3)")
    ).toBeInTheDocument();
  });

  test("updates input value when user types", () => {
    render(<StringCalculator />);
    const input = screen.getByPlaceholderText("Enter numbers (e.g., 1,2,3)");
    fireEvent.change(input, { target: { value: "1,2,3" } });
    expect(input).toHaveValue("1,2,3");
  });

  test("displays calculation result when calculate button is clicked", () => {
    (strCalculator as jest.Mock).mockReturnValue(6);
    render(<StringCalculator />);

    const input = screen.getByPlaceholderText("Enter numbers (e.g., 1,2,3)");
    fireEvent.change(input, { target: { value: "1,2,3" } });

    const calculateButton = screen.getByText("Calculate");
    fireEvent.click(calculateButton);

    expect(screen.getByText("Result: 6")).toBeInTheDocument();
  });
});
