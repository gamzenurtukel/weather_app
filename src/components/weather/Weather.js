import "./Weather.scss";

import { useSelector } from "react-redux";
import WeatherRightItem from "../weatherRightItem";
import WeatherLeftItem from "../weatherLeftItem";
import { getLoading } from "../../redux/slices/weatherSlice";
import Loader from "../loader";

function Weather() {
  const weather = useSelector((state) => state?.weathers.weatherItem);
  const isLoding = useSelector(getLoading);

  return (
    <div className="weather">
      {isLoding ? (
        <Loader />
      ) : (
        <>
          <div className="weather-city">
            <p>Turkey,TR</p>
            <span>{weather.name}</span>
          </div>
          <div className="weather-detail">
            <WeatherLeftItem weather={weather} />
            <WeatherRightItem weather={weather} />
          </div>
        </>
      )}
    </div>
  );
}

export default Weather;
