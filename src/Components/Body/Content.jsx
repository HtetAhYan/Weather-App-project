import React,{useState} from 'react'
import './Style/Body.css'

function Content({weather,icon}) {
  
   
    
  return (
    <div className='content'>
      <h1>{`${weather?.main?.temp} °C`}</h1>
      <h2>{`${weather?.weather?.[0]?.description}`}</h2>
      <h2>{`${weather?.name}, ${weather?.sys?.country}`}</h2>
      {weather?.weather?.[0]?.main.includes('Cloud') &&  <img src={icon[5].src} alt="" />}
      {weather?.weather?.[0]?.main.includes('storm') &&  <img src={icon[6].src} alt="" />}
      {weather?.weather?.[0]?.main.includes('Rain') &&  <img src={icon[2].src} alt="" />}
      {weather?.weather?.[0]?.main.includes('Snow') &&  <img src={icon[3].src} alt="" />}
      {weather?.weather?.[0]?.main.includes('Clear') &&  <img src={icon[4].src} alt="" />}
      {weather?.weather?.[0]?.weather?.id>600 || weather?.weather?.[0]?.weather?.id>799 && <img src={icon[1].src} alt=""/>}
  
     
    </div>
  )
}

export default Content
