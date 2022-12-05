import "./WeatherRightItem.scss";

import moment from "moment";

function WeatherRightItem({ weather }) {
  return (
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
          <span>{moment(weather?.sys?.sunrise).format(" h:mm")}</span>
          <p>Sunrise</p>
        </span>
        <span>
          <span>{moment(weather?.sys?.sunset).format("h:mm")}</span>
          <p>Sunset</p>
        </span>
      </div>
    </div>
  );
}

export default WeatherRightItem;
