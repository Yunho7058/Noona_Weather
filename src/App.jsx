import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherBtn from './component/WeatherBtn';
import ClipLoader from 'react-spinners/ClipLoader';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const cities = ['paris', 'new york', 'tokyo', 'seoul'];
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
      setCity('');
    });
  };
  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5c82c10c134a54968a7785a451b0d394&units=metric`;
    setLoading(true);
    let respone = await fetch(url);
    let data = await respone.json();
    setWeather(data);
    setLoading(false);
  };

  //랜더를 하고 훅바로 실행
  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5c82c10c134a54968a7785a451b0d394&units=metric&units=metric`;
    setLoading(true);
    let respone = await fetch(url);
    let data = await respone.json();
    setWeather(data);
    setLoading(false);
  };
  useEffect(() => {
    city && getWeatherByCity();
  }, [city]);
  return (
    <div className="container">
      <div className="weather-box">
        {loading ? (
          <ClipLoader color="#005b8f" loading={loading} size={100} />
        ) : (
          <WeatherBox weather={weather} />
        )}
      </div>

      <WeatherBtn
        cities={cities}
        city={city}
        setCity={setCity}
        getCurrentLocation={getCurrentLocation}
      />
    </div>
  );
}

export default App;
