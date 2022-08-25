import React,{useState} from "react";
import "./Style/Bottom.css";
import Button from "@mui/material/Button";
import Detail from "./Detail";

function Bottom({ weather, icon }) {
const [isShowDetail,setIsShowDetail]= useState(false);
  return (
    <>
      <div className="bottom">
        <div className="humidity b">
          <h2>Humidity</h2>
          <div className="value">
            <h4>{weather?.main?.humidity}</h4>
            <img src={icon[7].src} alt="" />
          </div>
        </div>
        <div className="wind b">
          <h2>Wind</h2>
          <div className="value">
            <h4>{`${weather?.wind?.speed} Mph`}</h4>
            <img src={icon[8].src} alt="" />
          </div>
        </div>
        <Button
        className="button"
        variant="contained"
        color="secondary"
        
        onClick={() => setIsShowDetail(!isShowDetail)}
      >
        More details
      </Button>
      </div>{" "}
    
      <Detail weather={weather} isShowDetail={isShowDetail} setIsShowDetail={setIsShowDetail}/>
    </>
  );
}

export default Bottom;
