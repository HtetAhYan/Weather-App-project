import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

import Body from "./Components/Body/Body";
import Bottom from "./Components/Bottom/Bottom";
import Header from "./Components/Header/Header";
import Main from "./PcVersion/Content/Main/Main";

function App() {
  const [dataWeather, setDataWeather] = useState([]);
  const [dataCity, setCityData] = useState([]);

 
  return (
    <div className="App">
      <div className="appDt">
        <Main />
      </div>
      <div className="app">
        <Header />
        <Body setDataWeather={setDataWeather} setCityData={setCityData} />
      </div>
    </div>
  );
}

export default App;
