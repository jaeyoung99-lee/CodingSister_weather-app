import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = () => {
  return (
    <div className="button-box">
      <Button variant="info">Current Location</Button>
      <Button variant="info">Seoul</Button>
      <Button variant="info">Gyeonggi</Button>
    </div>
  );
};

export default WeatherButton;
