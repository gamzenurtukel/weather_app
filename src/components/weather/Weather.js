import "./Weather.scss";

import { useSelector } from "react-redux";

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
        <div className="weather-temperature">
          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${weather?.weather?.icon}@2x.png`}
            alt="/"
          />
          <div className="temperature-items">
            <p className="degrees-value">
              {Math.ceil(Number(weather?.main?.temp))}°
            </p>
            <p className="weather-status">{weather?.weather?.description}</p>
          </div>
        </div>
        <div className="weather-temperature-other">
          <div className="weather-temperature-other-group">
            <span>
              <span>{Math.ceil(Number(weather?.main?.temp_max))}°</span>
              <p>Hight</p>
            </span>
            <span>
              <span>{Math.ceil(Number(weather?.main?.temp_min))}°</span>
              <p>Low</p>
            </span>
            <span>
              <span>{weather?.wind?.speed}mph</span>
              <p>Wind</p>
            </span>
          </div>
          <div className="weather-temperature-other-group">
            <span>
              <span> %{weather?.main?.humidity}</span>
              <p>Humidity</p>
            </span>
            <span>
              <span>{weather?.sys?.sunrise}</span>
              <p>Sunrise</p>
            </span>
            <span>
              <span>{weather?.sys?.sunset}</span>
              <p>Sunset</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
