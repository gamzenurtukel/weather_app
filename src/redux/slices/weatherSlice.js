import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import weatherApi from "../services/wearherApi";
import { weatherApiKey } from "../services/weatherApiKey";

export const fetchAsyncWeather = createAsyncThunk(
  "weather/fetchAsyncWeather",
  async ({ value }) => {
    const response = await weatherApi.get(
      `q=${value}&appid=${weatherApiKey}&units=metric`
    );
    return response.data;
  }
);

const initialState = {
  weather: {},
  loading: true,
  error: false,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncWeather.pending]: (state) => {
      return { ...state, loading: true, error: false };
    },
    [fetchAsyncWeather.fulfilled]: (state, { payload }) => {
      return { ...state, weather: payload };
    },
    [fetchAsyncWeather.rejected]: (state) => {
      alert("weather not loaded");
      return { ...state, loading: false, error: true };
    },
  },
});

export const getWeather = (state) => state.weathers.weather;
export default weatherSlice.reducer;
