import React from "react";
import "./weatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Wed</div>
          <div className="forecast-icon">☀️</div>
          <div className="temperature-wrapping">
            <span className="day-high-temperature">
              <strong>20º</strong>
            </span>
            <span className="day-low-temperature">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
