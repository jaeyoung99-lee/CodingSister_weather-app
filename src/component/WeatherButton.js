import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity }) => {
  console.log("cities :", cities);
  return (
    <div className="button-box">
      <Button variant="info">Current Location</Button>
      {cities.map((item) => (
        <Button
          variant="info"
          onClick={() => {
            setCity(item);
          }}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
