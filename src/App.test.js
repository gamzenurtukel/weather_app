import { render, screen } from "@testing-library/react";
import App from "./App";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Header from "./components/header";
import Weather from "./components/weather";

describe("<App/>", () => {
  const initialState = {
    weathers: {},
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store;

  test("app render", async () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(<Header />).toBeDefined();
    expect(<Weather />).toBeDefined();
  });
});
