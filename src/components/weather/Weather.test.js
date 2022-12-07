import { render, screen } from "@testing-library/react";
import Weather from "./Weather";
import * as reactRedux from "react-redux";
import { getLoading } from "../../redux/slices/weatherSlice";
import WeatherLeftItem from "../weatherLeftItem";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("<Weather/>", () => {
  beforeEach(() => {
    useSelectorMock.mockImplementation((selector) => selector(getLoading));
  });
  afterEach(() => {
    useSelectorMock.mockClear();
  });

  const useSelectorMock = reactRedux.useSelector;

  test("should be render correctly", () => {
    render(<Weather />);
    const countryText = screen.getByText("Turkey,TR");
    expect(countryText).toBeInTheDocument();
  });

  test("should be render weatherLeftItem", () => {
    render(
      <div className="weather-detail">
        <WeatherLeftItem />
      </div>
    );
  });
});
