import { useState, useEffect } from "react";
import "./css/WeatherBanner.css";

const API_KEY = "1ac517df27cdf8836585f85daf01a89b";

const WeatherBanner = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=37.3208&lon=126.83&appid=${API_KEY}&units=metric&lang=kr`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("날씨 불러오기 실패:", error);
      }
    };
    fetchWeather();
  }, []);

  const getWeatherImage = () => {
    if (!weather) return "./img/default-weather.png";
    const main = weather.weather[0].main.toLowerCase();
    if (main.includes("clear")) return "./img/weather1.png";
    if (main.includes("cloud")) return "./img/weather2.png";
    if (main.includes("rain")) return "./img/weather3.png";
    return "./img/default-weather.png";
  };

  return (
    <div
      className="custom-banner active"
      style={{
        backgroundImage: `url(${getWeatherImage()})`,
        backgroundPosition: "center",
      }}
    >
      {weather ? (
        <div className="weather-info">
          <h2>현재 날씨 : {weather.weather[0].description}</h2>
          <p>
            온도 : {weather.main.temp}°C / 체감 {weather.main.feels_like}°C
          </p>
          <p>
            최저/최고 : {weather.main.temp_min}°C / {weather.main.temp_max}°C
          </p>
          <p>습도 : {weather.main.humidity}%</p>
          <p>기압 : {weather.main.pressure} hPa</p>
          <p>
            바람 : {weather.wind.speed} m/s, 방향 {weather.wind.deg}°
          </p>
          <p>구름 : {weather.clouds.all}%</p>
        </div>
      ) : (
        <p>날씨 정보를 불러오는 중...</p>
      )}
    </div>
  );
};

export default WeatherBanner;
