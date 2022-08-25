import React, { useEffect } from "react";
import axios from "axios";
//outsideClick
import OutsideClickHandler from 'react-outside-click-handler';
//muiIcons
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import ThermostatIcon from '@mui/icons-material/Thermostat';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import CompressIcon from '@mui/icons-material/Compress';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./Style/Bottom.css";
import { useState } from "react";

function Detail({ isShowDetail, weather,setIsShowDetail }) {
  const [TZApi, setTZApi] = useState([]);
  useEffect(() => {
    axios
      .get(`https://timezoneapi.io/api/ip/?token=aSdfTeHXmzUmvYWotmcG`)
      .then((response) => setTZApi(response.data));
  }, [isShowDetail]);
/*   console.log(weather) */
var rise = new Date(weather?.sys?.sunrise * 1000).toLocaleTimeString(
    "mm"
  );

  var set = new Date(weather?.sys?.sunset * 1000).toLocaleTimeString("mm");
  return (
    <>
      {isShowDetail && (
        <OutsideClickHandler onOutsideClick={() => {
            setIsShowDetail(false)
          }}>
        <div className="detail">
          <div className="detailTitle">
            <p>
              {" "}
              <LocationOnIcon/>{weather?.name}, {weather?.sys?.country}
            </p>
          </div>
          <div className="detailGrid">
            <div className="detailGridItems">
              <span>
                <p>Feels like</p>
                <EmojiEmotionsOutlinedIcon sx={{marginLeft:'0.5vh'}}/>
              </span>
              <h4>{weather?.main?.feels_like} °C</h4>
            </div>
            <div className="detailGridItems">
              <span>
                <p>Max temp</p>
                <ThermostatIcon sx={{marginLeft:'0.5vh'}}/>
              </span>
              <h4>{weather?.main?.temp_max} °C</h4>
            </div>
            <div className="detailGridItems">
              <span>
                <p>Min temp</p>
                <ThermostatAutoIcon sx={{marginLeft:'0.5vh'}}/>
              </span>
              <h4>{weather?.main?.temp_min} °C</h4>
            </div>
            <div className="detailGridItems">
              <span>
                <p>Pressure</p>
                <CompressIcon sx={{marginLeft:'0.5vh'}}/>
              </span>
              <h4>{weather?.main?.pressure} mbar </h4>
            </div>
            <div className="detailGridItems">
              <span>
                <p>Sunrise</p>
                <WbSunnyIcon sx={{marginLeft:'0.5vh'}}/>
              </span>
              <h4>{rise}</h4>
            </div>
            <div className="detailGridItems">
              <span>
                <p>Sunset</p>
                <WbTwilightIcon sx={{marginLeft:'0.5vh'}}/>
              </span>
              <h4>{set} </h4>
            </div>
          </div>
        </div>
        </OutsideClickHandler>
      )}
     
    </>
  );
}

export default Detail;
