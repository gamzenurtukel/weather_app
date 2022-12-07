import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import * as reactRedux from "react-redux";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));
describe("<SearcBar/>", () => {
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
  });

  afterEach(() => {
    useDispatchMock.mockClear();
  });

  const useDispatchMock = reactRedux.useDispatch;

  test("should be render correctly", () => {
    render(<SearchBar />);
    const placeholderText = screen.getByPlaceholderText("Search City");
    expect(placeholderText).toBeInTheDocument();
    expect(placeholderText).toHaveValue("istanbul");
  });
});
