import React, { useState, useEffect } from "react";
import "../styles/TimeContainer.css";

function TimeContainer() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setDate(new Date());
  };

  return (
    <div className="timecontainer">
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  );
}

export default TimeContainer;
