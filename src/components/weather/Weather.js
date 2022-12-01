import "./Weather.scss";
import { AiFillCloud } from "react-icons/ai";

function Weather() {
  return (
    <div className="weather">
      <div className="weather-city">
        <p>New York,US</p>
        <span>wednesday 1 April</span>
      </div>
      <div className="weather-detail">
        <div className="weather-temperature">
          <AiFillCloud className="weather-icon" />
          <div className="temperature-items">
            <p className="degrees-value">5°</p>
            <p className="weather-status">overcast clouds</p>
          </div>
        </div>
        <div className="weather-temperature-other">ksksksk</div>
      </div>
    </div>
  );
}

export default Weather;
