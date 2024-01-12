import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [temperature, setTemperature] = useState("null");
  const [city, setCity] = useState("Manhattan");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");
  const [loaded, setLoaded] = useState(false);

  function showTemp(response) {
    setLoaded(true);
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description.charAt(0).toUpperCase()+response.data.weather[0].description.slice(1));
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    let key = `62231151ce343c4d68652e1617efc22f`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(url).then(showTemp);
  }
  function updateCity(event) {


    setCity(event.target.value.charAt(0).toUpperCase()+event.target.value.slice(1));
  }


  let form = (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="search"
        type="search"
        placeholder="Enter a city"
        onChange={updateCity}
      />
      <input className="submit" type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="description">
          <ul>
          <li className="text">{description}</li>
            <li className="humidity">Humidity: {humidity}% | Wind: {wind}km/h</li>
           
          </ul>
          <img src={icon} alt="weather icon"/>
          <div className="temperature">{temperature}<span class="units">°C
      </span></div>
        </div>
      </div>
    );
  } else {
    
   return form;
   }
  }