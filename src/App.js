import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

// 1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다
// 2. 날씨 정보에는 도시, 섭씨, 화씨, 날씨 상태
// 3. 5개의 버튼이 있다(1개는 현재 위치, 4개는 다른 도시)
// 4. 도시 버튼을 클릭할 때마다 도시별 날씨가 나온다
// 5. 현재 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다
// 6. 데이터를 들고오는동안 로딩 스피너가 돈다

const API_KEY = "c1d4978c51d55df7b0df6aa7961250d9";

function App() {
  const [weather, setWeather] = useState(null);
  const cities = ["Seoul", "Gyeonggi-do", "Busan", "New York"];
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false); // 로딩 스피너

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("현재 위치 :", lat, lon);
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    console.log("data :", data);
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=kr`;
    setLoading(true);
    let response = await fetch(url);
    let cityData = await response.json();
    console.log("city data :", cityData);
    setWeather(cityData);
    setLoading(false);
  };

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      // 버튼 눌렀을 때 버튼에 해당하는 city가 잘 나오는지 확인
      // city state를 주시하고 있다가 city state 값이 바뀌는 순간 실행
      console.log("city :", city);
      getWeatherByCity();
    }
  }, [city]);

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader color="rgb(255, 165, 0)" loading={loading} size={150} />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton cities={cities} setCity={setCity} />
        </div>
      )}
    </div>
  );
}

export default App;
