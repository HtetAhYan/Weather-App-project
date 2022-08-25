import React from "react";
import "./Style/BodyAll.css";
import axios from "axios";
import { AjaxClient } from "ajax-client";
import { useEffect } from "react";
import { useState } from "react";

import BodyImg from "./BodyImg";
import WbTwilightOutlinedIcon from "@mui/icons-material/WbTwilightOutlined";
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";
function BodyPc({setLocalData}) {
  const [cityData, setCityData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [lati, setLati] = useState("16.7967");
  const [longi, setLongi] = useState("96.161");
  //weatherPart
  const [weatherBody, setWeatherBody] = useState([]);
  const [population, setPopulation] = useState("");
  //facts
  const [fact, setFact] = useState("");
  //CityApi

  useEffect(() => {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: `https://api.api-ninjas.com/v1/city?name=${inputValue}&limit=8`,
      headers: { "X-Api-Key": "FPMh02a/12I38Scu0anu+w==vYHciQYXWaxJaq95" },
      contentType: "application/json",
    };

    axios.request(options).then(function (response) {
      setCityData(response.data);
    });
  }, [inputValue]);
  useEffect(() => {
    var limit = 1;
    const jokes = {
      method: "GET",
      url: "https://api.api-ninjas.com/v1/facts?limit=" + limit,
      headers: { "X-Api-Key": "FPMh02a/12I38Scu0anu+w==vYHciQYXWaxJaq95" },
      contentType: "application/json",
    };
    axios.request(jokes).then((resp) => setFact(resp.data));
  }, []);
  
  //LatitudeLongitude
  //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=d3f4976cb8772386e5eb365a34f0bce7&units=metric`
      )
      .then((res) => {
        setWeatherBody(res.data);
      setLocalData(res.data)}
      );
  }, [population]);

  //sunset and rise
  var rise = new Date(weatherBody?.sys?.sunrise * 1000).toLocaleTimeString(
    "mm"
  );

  var set = new Date(weatherBody?.sys?.sunset * 1000).toLocaleTimeString("mm");

  return (
    <div className="bodyPc">
      <div className="inputItems">
        <input
          type="text"
          placeholder="Search a city..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="inputStick"></div>
        <div className="autocompleteWeather">
          {inputValue.length > 0
            ? cityData.map((city) => {
                return (
                  <p
                    key={city.latitude}
                    onClick={() => {
                      setLati(city.latitude);
                      setLongi(city.longitude);
                      setCityData([]);
                      setPopulation(city.population);
                      setInputValue(city.name);
                    }}
                  >
                    {city.name}, {city.country}
                  </p>
                );
              })
            : null}
        </div>
      </div>

      {/* middle */}
      <div className="bodyAll">
        <div className="sunRise">
          <span>
            Sunrise
            <WbTwilightOutlinedIcon
              sx={{ fontSize: "2rem", marginLeft: "1vw" }}
            />
          </span>
          <h5>{rise}</h5>
          <h5>(LocalTime)</h5>
        </div>
        <div className="bodyDisplay">
          <h1 className="h1 txt">{weatherBody?.main?.temp} °C</h1>
          <h2 className="h2 txt">{weatherBody?.weather?.[0]?.description}</h2>
          <h2 className="h2 txt">
            {weatherBody?.name}, {weatherBody?.sys?.country}
          </h2>
          <BodyImg weatherBody={weatherBody} />
        </div>
        <div className="sunSet">
          <span>
            Sunset
            <Brightness1OutlinedIcon
              sx={{ fontSize: "2rem", marginLeft: "1vw" }}
            />
          </span>
          <h5>{set}</h5>
          <h5>(LocalTime)</h5>
        </div>
      </div>

      <div className="facts">
        <h1>Facts</h1>
        <p>"{fact?.[0]?.fact}"</p>
      </div>
    </div>
  );
}

export default BodyPc;
