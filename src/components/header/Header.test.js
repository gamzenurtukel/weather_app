import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("<Header/>", () => {
  test("should be render correctly", () => {
    render(<Header />);
    const header = screen.getByText("Weather App");
    expect(header).toBeInTheDocument();
  });
});
