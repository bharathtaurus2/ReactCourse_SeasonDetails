import React from "react";
import "./SeasonDisplay.css";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Get me a shot of Morpheous!",
    iconName: "snowflake"
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());

  var { text, iconName } = SeasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`left-icon massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`right-icon massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
