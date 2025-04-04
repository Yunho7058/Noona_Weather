import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const WeatherBtn = ({ cities, city, setCity, getCurrentLocation }) => {
  return (
    <div className="btn-box">
      <Button
        variant={city === '' ? 'primary' : 'outline-primary'}
        onClick={() => getCurrentLocation()}
      >
        Current Location
      </Button>
      {cities.map((el, idx) => (
        <Button
          variant={city === el ? 'primary' : 'outline-primary'}
          key={idx}
          onClick={() => setCity(el)}
        >
          {el}
        </Button>
      ))}
    </div>
  );
};

export default WeatherBtn;
