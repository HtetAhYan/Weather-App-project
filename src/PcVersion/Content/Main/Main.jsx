import React from 'react'
import BodyPc from '../Body/BodyPc'
import FooterPc from '../Footer/FooterPc'
import NavBar from '../NavBar/NavBar'
import './Style/Main.css'
import { useState } from 'react';
function Main() {
  const[localData,setLocalData] =useState([])
  return (
    <div className='Main'>
        <NavBar/>
       <BodyPc setLocalData={setLocalData}/>
        <FooterPc localData={localData}/>
    </div>
  )
}

export default Main