import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="search-fields">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </form>
      <h1>Paris</h1>
      <ul>
        <li>Saturday</li>
        <li>Mostly Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://icons.twnmm.com/wx_icons/v2/3.svg"
            alt="mostly sunny icon"
            className="current-weather-icon"
          />
          10ºC
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 55%</li>
            <li>Wind: 10 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
