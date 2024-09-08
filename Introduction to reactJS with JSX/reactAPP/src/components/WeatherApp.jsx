import "../components/Weather.css";
import React, { useState } from "react";


function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (e) => {
    try {
      e.preventDefault();
      setError(null);
      const apiKey = "f7a704dc638114e9f6daecd434ffeddd";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("City not found or other issue with the API");
      }
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={fetchWeather}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          required
        />
        <button type="submit">Get Weather</button>
      </form>
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="des">
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
