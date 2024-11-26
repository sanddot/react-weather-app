import React from "react";
import "./weatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "t3f3af9b184481d0306edc82cbo6ff8c";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;

  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

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
