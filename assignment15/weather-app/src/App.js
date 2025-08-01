import React, { useState } from "react";
import "./App.css";

const dummyWeatherData = {
  Delhi: {
    name: "Delhi",
    country: "IN",
    temp: 34,
    condition: "Sunny",
  },
  Mumbai: {
    name: "Mumbai",
    country: "IN",
    temp: 30,
    condition: "Cloudy",
  },
  London: {
    name: "London",
    country: "UK",
    temp: 18,
    condition: "Rainy",
  },
  Paris: {
    name: "Paris",
    country: "FR",
    temp: 22,
    condition: "Sunny",
  },
  NewYork: {
    name: "New York",
    country: "US",
    temp: 25,
    condition: "Thunderstorm",
  },
  Tokyo: {
    name: "Tokyo",
    country: "JP",
    temp: 28,
    condition: "Foggy",
  },
};

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = () => {
    const formattedCity = city.trim().replace(/\s+/g, '');
    const data = dummyWeatherData[formattedCity];
    setWeather(data || null);
  };

  return (
    <div className="container">
      <h2>🌤️ Weather App</h2>
      <input
        type="text"
        placeholder="Enter city name (e.g., Delhi)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {weather ? (
        <div className="weather-box">
          <h3>{weather.name}, {weather.country}</h3>
          <p>Temperature: {weather.temp} °C</p>
          <p>Condition: {weather.condition}</p>
        </div>
      ) : city && (
        <p className="not-found">No weather data found for "{city}"</p>
      )}
    </div>
  );
};

export default App;
