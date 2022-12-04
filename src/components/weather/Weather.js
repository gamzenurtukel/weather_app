import "./Weather.scss";

import { useSelector } from "react-redux";
import WeatherRightItem from "../weatherRightItem";
import WeatherLeftItem from "../weatherLeftItem";

function Weather() {
  const weather = useSelector((state) => state?.weathers.weatherItem);
  console.log({ weather });

  return (
    <div className="weather">
      <div className="weather-city">
        <p>Turkey,TR</p>
        <span>{weather.name}</span>
      </div>
      <div className="weather-detail">
        <WeatherLeftItem weather={weather} />
        <WeatherRightItem weather={weather} />
      </div>
    </div>
  );
}

export default Weather;
