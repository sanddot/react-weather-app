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
            autoFocus="on"
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </form>
      <h1>Paris</h1>
      <ul>
        <li>Saturday 11:00</li>
        <li>Mostly Sunny</li>
      </ul>
      <div className="row mt-4">
        <div className="col-6">
          <div className="wrapper">
            <img
              src="https://icons.twnmm.com/wx_icons/v2/3.svg"
              alt="mostly sunny icon"
              className="current-weather-icon"
            />
            <span className="temperature">6</span>
            <span className="unit">ºC</span>
          </div>
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
