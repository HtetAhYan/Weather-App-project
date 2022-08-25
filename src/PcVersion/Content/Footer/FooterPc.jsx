import React from 'react'
import axios from 'axios'
import { Stack } from '@mui/material'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import OpacityIcon from '@mui/icons-material/Opacity';
import CompressIcon from '@mui/icons-material/Compress';
import AirIcon from '@mui/icons-material/Air';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import LightModeIcon from '@mui/icons-material/LightMode';
import HomeIcon from '@mui/icons-material/Home';
import './Style/FooterPc.css'
import { useContext, useEffect } from 'react';
import { useState } from 'react';
function FooterPc({localData}) {
  const [timeZoneApi,setTimeZoneApi]=useState([])
  var dt = new Date(localData?.dt * 1000).toLocaleTimeString(
    "UK"
  );
  useEffect(() => {
    axios.get(`https://timezoneapi.io/api/ip/?token=aSdfTeHXmzUmvYWotmcG`).then(res => setTimeZoneApi(res.data));
  },[])

  return (
     <div  className='footerPc'>
      <div className="gridItem"><div className="gridFlex"><p>Feels like</p><EmojiEmotionsIcon/></div><h5>{localData?.main?.feels_like} °C</h5></div>
      <div className="gridItem"><div className="gridFlex"><p>Humidity</p><OpacityIcon/></div><h5>{localData?.main?.humidity} %</h5></div>
      <div className="gridItem"><div className="gridFlex"><p>Pressure</p><CompressIcon/></div><h5>{localData?.main?.pressure} mbar </h5></div>
      <div className="gridItem"><div className="gridFlex"><p>Wind speed</p><AirIcon/></div><h5>{localData?.wind?.speed} mph</h5></div>
      <div className="gridItem"><div className="gridFlex "><p>Coordinate</p><LocationOnOutlinedIcon/></div><h5 className='coor'>Lat:{localData?.coord?.lat}, lon:{localData?.coord?.lon}</h5></div>
      <div className="gridItem"><div className="gridFlex"><p>Max temperature</p><ThermostatIcon/></div><h5>{localData?.main?.temp_max} °C</h5></div>
      <div className="gridItem"><div className="gridFlex"><p>Min temperature</p><ThermostatIcon/></div><h5>{localData?.main?.temp_min} °C</h5></div>
      <div className="gridItem"><div className="gridFlex"><p>Data receiving time</p><LightModeIcon/></div><h5>{dt}</h5></div>
      <div className="gridItem"><div className="gridFlex"><p>IP address</p><HomeIcon/></div><h5>{timeZoneApi?.data?.ip}</h5></div>
      <div className="gridItem"><div className="gridFlex"><p>Date (Local Date)</p></div><h5 className='dateh5'>{timeZoneApi?.data?.datetime?.date_time}</h5></div>
      
 
     </div>
  ) 
}

export default FooterPc