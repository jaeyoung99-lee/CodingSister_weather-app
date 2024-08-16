import React from "react";

// 매개변수 자리에 props를 적어야 하지만 props.weather로 쳐주는 게 길 때,
// 중괄호를 치고 가지고 오고 싶은 것의 이름을 적어서 가져올 수 있음
// 예를 들면, weather를 가지고 오고 싶으면 아래에 적은 것처럼
// 중괄호 안에 weather를 적으면 됨
const WeatherBox = ({ weather }) => {
  console.log("weather :", weather);
  return (
    <div className="weather-box">
      {/* <div>{weather && weather.name}</div> */}
      {/* 위아래 같은 결과, 다른 방식 */}
      <h1>{weather?.name}</h1>
      <h2>
        {weather?.main.temp}℃ / {parseInt(weather?.main.temp * 1.8 + 32)}℉
      </h2>
      <h3>
        <img
          src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
        />
        <br />
        {weather?.weather[0].description}
      </h3>
    </div>
  );
};

export default WeatherBox;
