import styles from "./CityList.module.css";
import React, { useState } from 'react';


const cities = [
  { id: 1, name: "Chicago", image: "../../images/chicago.jpg" },
  { id: 2, name: "Los Angeles", image: "../../images/los-angeles.jpg" },
  { id: 3, name: "New York", image: "../../images/new-york.jpg" }
];

const CityList = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleSelectCity = (city) => {
    setSelectedCity(city);
  }


  return (
    <div>
      <h2>Завдання 5-6:</h2>
      <div className="city-select">
        <select onChange={(e) => handleSelectCity(cities.find(city => city.name === e.target.value))}>
          <option>Select a city</option>
          {cities.map(city => (
            <option key={city.id} value={city.name}>{city.name}</option>
          ))}
        </select>
      </div>
      {selectedCity && (
        <div>
          <h3>Selected City:</h3>
          <img src={selectedCity.image} alt={selectedCity.name} />
          <span>{selectedCity.name}</span>
        </div>
      )}
    </div>
  );
};

export default CityList;