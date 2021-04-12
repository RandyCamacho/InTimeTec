import React, { useState, useEffect } from "react";
import "../styles/AppContainer.css";
import QuoteContainer from "./QuoteContainer";
import TimeContainer from "./TimeContainer";
import WeatherContainer from "./WeatherContainer";

function AppContainer() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    try {
      fetch("http://www.splashbase.co/api/v1/images/random/")
        .then((response) => response.json())
        .then((data) => {
          setImage(data);
        });
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <div
      className="container"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${image?.url})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="content">
        <TimeContainer />
        <WeatherContainer />
      </div>

      <div className="footer">
        <QuoteContainer />
      </div>
    </div>
  );
}

export default AppContainer;
