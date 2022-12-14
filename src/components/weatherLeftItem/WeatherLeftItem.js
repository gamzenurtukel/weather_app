import "./WeatherLeftItem.scss";

function WeatherLeftItem({ weather }) {
  return (
    <div className="weather-temperature">
      <img
        className="weather-icon"
        src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
        alt="/"
      />
      <div className="weather-temperature-items">
        <p className="degrees-value">
          {Math.ceil(Number(weather?.main?.temp))}°
        </p>
        <p className="weather-status">{weather?.weather[0].description}</p>
      </div>
    </div>
  );
}

export default WeatherLeftItem;
