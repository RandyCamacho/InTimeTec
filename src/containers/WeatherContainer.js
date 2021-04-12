import React, { useState, useEffect } from "react";
import "../styles/WeatherContainer.css";

function WeatherContainer() {
  const key = "473496f0d9b806ad80a3ba965fbf6fae";
  const [feels_like, setFeelsLike] = useState("");
  const [mainTemp, setMainTemp] = useState("");
  const [description, setDescription] = useState("");
  const [main, setMain] = useState("");
  const [iconID, setIconID] = useState("");

  useEffect(() => {
    try {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Boise,USA&APPID=${key}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setFeelsLike(Math.floor(((data.main.feels_like - 273) * 9) / 5 + 32));
          setMainTemp(Math.floor(((data.main.temp - 273) * 9) / 5 + 32));
          setDescription(data.weather[0].description);
          setMain(data.weather[0].main);
          setIconID(data.weather[0].icon);
        });
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <div className="weathercontainer">
      <h2>Boise, Idaho</h2>
      <h3>Temperature: {mainTemp} F </h3>
      <h3>Feels like: {feels_like} F </h3>
      <h3>{main}</h3>
      <h4>{description}</h4>
      <img
        className="weathericon"
        alt="Weather Icon"
        src={`http://openweathermap.org/img/w/${iconID}.png`}
      />
    </div>
  );
}

export default WeatherContainer;
