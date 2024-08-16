import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity, currentCity }) => {
  console.log("cities :", cities);
  return (
    <div className="button-box">
      <Button
        variant={`${currentCity === "" ? "success" : "info"}`}
        onClick={() => {
          setCity("");
        }}
      >
        Current Location
      </Button>
      {cities.map((item) => (
        <Button
          variant={`${currentCity === item ? "success" : "info"}`}
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
