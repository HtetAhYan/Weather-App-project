import React from "react";
import { useState } from "react";

function BodyImg({weatherBody}) {
  const [darkWeatherImg, setDarkWeatherImg] = useState([
    {
      name: "thunder",
      src: "./icons/Svg/thnderstorm.svg",
    },
    {
      name: "rain",
      src: "./icons/Svg/rainy.svg",
    },
    {
      name: "night",
      src: "./icons/Svg/night_storm.svg",
    },
    {
      name: "clear",
      src: "./icons/Svg/slight_touch_happyday.svg",
    },
    {
      name: "scattered clouds",
      src: "./icons/Svg/partly_cloudy.svg",
    },
    {
      name: "clouds",
      src: "./icons/Svg/cloudy.svg",
    },
    {
      name: "snow",
      src: "./icons/Svg/snowy.svg",
    }
  ]);

  return <div className="bodyImg">
    {weatherBody?.weather?.[0]?.description.includes('cloud') &&  <img src={darkWeatherImg[4].src} alt="" />}
      {weatherBody?.weather?.[0]?.description.includes('storm') &&  <img src={darkWeatherImg[6].src} alt="" />}
      {weatherBody?.weather?.[0]?.description.includes('rain') &&  <img src={darkWeatherImg[1].src} alt="" />}
      {weatherBody?.weather?.[0]?.description.includes('snow') &&  <img src={darkWeatherImg[6].src} alt="" />}
      {weatherBody?.weather?.[0]?.description.includes('thunderstorm with ') &&  <img src={darkWeatherImg[2].src} alt="" />}
      {weatherBody?.weather?.[0]?.description.includes('clear') &&  <img src={darkWeatherImg[3].src} alt="" />}

      {weatherBody?.weather?.[0]?.id>=700 && weatherBody?.weather?.[0]?.id <=799 &&  <img src={darkWeatherImg[5].src} alt=""/>}
   
  </div>;
}

export default BodyImg;
