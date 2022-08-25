import React, { useState, useEffect } from "react";
import "./Style/Body.css";
import axios from "axios";
import { Stack } from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import Bottom from "../Bottom/Bottom";
import Content from "./Content";
function Body({ setDataWeather,setDataCity }) {
  const [value, setValue] = useState("Yangon");
  const [lat, setLat] = useState("16.795");
  const [lon, setLon] = useState("96.16");
  const [isContent, setIsContent] = useState(false);
  const [weather, setWeather] = useState([]);

  const [autocomplete, setAutocomplete] = useState([]);
  const [showautocomplete, setShowAutocomplete] = useState(false);
  const axios = require("axios");
  const [icon, setIcon] = useState([
    { id: 200, src: "./icons/Rain_storm.png" },
    { id: 230, src: "./icons/night_storm.png" },
    { id: 500, src: "./icons/rainy.png" },
    { id: 600, src: "./icons/snowy.png" },
    { id: 800, src: "./icons/sunny.png" },
    { id: 801, src: "./icons/partly_cloudy.png" },
    { id: 900, src: "./icons/thnderstorm.png" },
    { id: 0, src: "./icons/Vector.png" },
    { id: 1, src: "./icons/Wind.png" },
  ]);
  useEffect(() => {
    const axios = require("axios");
    const displayData = [{ City: value, Lat: lat, Lon: lon }];
    const displayUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${displayData[0].Lat}&lon=${displayData[0].Lon}&appid=d3f4976cb8772386e5eb365a34f0bce7&units=metric`;
    axios.get(displayUrl).then((res) => {
      setWeather(res.data);
      setDataWeather(res.data);
    });
    /* const options = {
      method: "GET",
      url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",

      params: { namePrefix: `${value}` },
      headers: {
        "X-RapidAPI-Key": "1a35b07efdmsh917f4014386f69ep1d2d54jsnda9c438998b6",
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    };

    axios.request(options).then(function (response) {
      if (value.length > 0) {
        setAutocomplete(response.data.data);
        setDataCity(response.data)
        
        
      } else {
        setAutocomplete([]);
      }
    }); */
   
     
  
      const options = {
        method: "GET",
        url: `https://api.api-ninjas.com/v1/city?name=${value}&limit=5`,
        headers: { "X-Api-Key": "FPMh02a/12I38Scu0anu+w==vYHciQYXWaxJaq95" },
        contentType: "application/json",
      };
  
      axios.request(options).then(function (response) {
        setAutocomplete(response.data);
        setDataCity(response.data);
        
           
      });
   
    /*      .catch(function (error) {
        console.error(error);
      }); */
  }, [value]);
 
  const ValueHandle = (e) => {
    setShowAutocomplete(true);  
    setValue(e.target.value);
  };


  const Handle = (e) => {
    const detail = [{ City: value, Lat: lat, Lon: lon }];
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${detail[0].Lat}&lon=${detail[0].Lon}&appid=d3f4976cb8772386e5eb365a34f0bce7&units=metric`;
    axios.get(weatherApi).then((res) => {
      setWeather(res.data);
      
    });
  
  };

  return (
    <div className="body">
      <div className="inputBox">
        <input
          type="text"
          value={value}
          placeholder="Search a city"
          onChange={ValueHandle}
          onKeyPress={Handle}
        />
        <div className="stick"></div>
        <div className="autocompleteBox">
          {value.length>0 ? (
            autocomplete.map((c) => {
              return (
                <p
                  key={c.id}
                  className="autocomplete"
                  onClick={() => {
                    setValue(c.name);
                    setLat(c.latitude);
                    setLon(c.longitude);
                  }}
                  onKeyPress={Handle}
                >
                  {`${c.name}, ${c.country}`}
                </p>
              );
            })
          ) : (
           null
          )}
        </div>
      </div>
      <Content isContent={isContent} weather={weather} icon={icon} />
      <Bottom weather={weather} icon={icon} />
    </div>
  );
}

export default Body;
