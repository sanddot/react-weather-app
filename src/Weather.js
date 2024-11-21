import React, { useState } from "react";

import "./weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      iconUrl: response.data.condition.icon_url,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
    });
  }
  function search() {
    const apiKey = "t3f3af9b184481d0306edc82cbo6ff8c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="search-fields">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
              onChange={updateCity}
            />
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
