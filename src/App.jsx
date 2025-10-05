import React, { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=ca00a2767e27ae5fac39e64dc766aada&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((e) => console.log(e));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Header */}
      <h1 className="text-2xl md:text-4xl text-center font-bold mb-6 text-gray-800">
        <i class="fa-solid fa-cloud mr-2"></i>
        Weather Forecast
      </h1>

      {/* Search */}
      <div className="flex flex-row items-center mb-6 w-full max-w-sm">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-3 rounded-l-3xl border border-gray-300"
        />
        <button
          onClick={getWeather}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 flex items-center space-x-2 text-center rounded-r-3xl transition"
        ><i class="fa-brands fa-searchengin"></i><span>
          Search</span>
        </button>
      </div>

      {/* Weather Card */}
      {weather && weather.main ? (
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather icon"
            className="mx-auto mb-2"
          />
          <p className="capitalize mb-4 text-gray-700">{weather.weather[0].description}</p>
          <p className="text-4xl font-bold mb-1">{Math.round(weather.main.temp)}°C</p>
          <p className="text-gray-600 mb-4">Feels like {Math.round(weather.main.feels_like)}°C</p>

          <div className="flex justify-around mt-4 text-gray-700">
            <div>
              <p className="font-semibold">Humidity</p>
              <p>{weather.main.humidity}%</p>
            </div>
            <div>
              <p className="font-semibold">Wind</p>
              <p>{weather.wind.speed} m/s</p>
            </div>
            <div>
              <p className="font-semibold">Pressure</p>
              <p>{weather.main.pressure} hPa</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 mt-6">Enter a city to get the weather</p>
      )}
    </div>
  );
}

export default App;
