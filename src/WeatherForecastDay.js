import React from "react";

export default function WeatherForecastDay(props) {
  function dayHighTemperature() {
    let highTemperature = Math.round(props.data.temperature.maximum);
    return highTemperature;
  }
  function dayLowTemperature() {
    let lowTemperature = Math.round(props.data.temperature.minimum);
    return lowTemperature;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">{day()}</div>
      <div>
        {" "}
        <img
          className="forecast-icon"
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
        />
      </div>
      <div className="temperature-wrapping">
        <span className="day-high-temperature">
          <strong>{dayHighTemperature()}º</strong>
        </span>
        <span className="day-low-temperature">{dayLowTemperature()}º</span>
      </div>
    </div>
  );
}
