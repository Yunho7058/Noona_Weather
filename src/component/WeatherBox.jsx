import React from 'react';

const WeatherBox = ({ weather }) => {
  return (
    <div>
      <div>{weather?.name}</div>
      <h2>
        {weather?.main.temp}℃ / {(weather?.main.temp * 1.8 + 32).toFixed(2)}℉
      </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
