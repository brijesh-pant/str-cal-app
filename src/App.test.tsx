import { render } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("renders without crashing", () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  it("renders with correct className", () => {
    const { container } = render(<App />);
    const appDiv = container.firstChild as HTMLElement;
    expect(appDiv).toHaveClass("App");
  });

  it("contains StrCalculator component", () => {
    const { getByTestId } = render(<App />);
    const calculator = getByTestId("str-calculator");
    expect(calculator).toBeInTheDocument();
  });
});
