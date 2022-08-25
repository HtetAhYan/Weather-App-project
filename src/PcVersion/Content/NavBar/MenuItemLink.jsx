import React from "react";
import "./Style/NavBar.css";
import { useState,useRef } from "react";
import emailjs from '@emailjs/browser';
import { Stack } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import BehanceImg from "../../../Images/Behance.png";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
function MenuItemLink({ isLinkActive, setIsLinkActive }) {
  const[isShowAbout,setIsShowAbout] =useState(true)
  const[valueLength,setValueLength]= useState('');
  const [text, setText] = useState('htetahyan@gmail.com');
  const [linksData, setLinksData] = useState([
    { name: "About", url: false},
    { name: "Feedback", url: true},
    { name: "Source Code",url:"https://portfoliopredemo.netlify.app/Contact"},
  ]);
  const [isSent,setIsSent]=useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert('Copied Email address to clipboard, htetahyan@gmail.com ');
  }
//email
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Jeremy_kun', 'JeremyPortfolio', form.current, '0Vide87CskT8zVici')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
//j

 
  return (
    <div
      className="menuItemLinks"
      style={{ display: isLinkActive ? "block" : "none" }}
    >
      <ul className="menyLinkLists">
        {linksData.map((link) => {
          return (
            <li key={link.name}>
              <a onClick={() => {setIsShowAbout(link.url);
              setIsSent(link.url)} } href={link.url}>{link.name}</a>
            </li>
          );
        })}
        <li>
          <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
            <a href='https://www.facebook.com/htet.a.yan.566'><FacebookRoundedIcon /></a>
            <a href="tel:+95-965-0854-2555"><LocalPhoneRoundedIcon /></a>
            <a href="https://www.behance.net/htetahyan"><img src={BehanceImg} alt="" style={{ maxHeight: "2.2vh" }} /></a>
            <a onClick={copy} disabled={!text}><MailRoundedIcon /></a>
          
          </Stack>
        </li>
        
      </ul>
      {!isShowAbout ? <Stack className="aboutPC">
          <Stack direction='row' sx={{alignItems: "center" }} >
            <h1 >About</h1>
            <CloseRoundedIcon sx={{fontSize:'2.2rem',position:'fixed',right:'0.5vh'}} onClick={() => setIsShowAbout(!isShowAbout)}/>

          </Stack>
          <h4>I created this project using React and material ui.
          For display icon svg, I used a figma pack called Night Mode Icons by Samrat Chowdhury. For displaying data I used <a href="#"> open weather api</a>, 
          <a href="#"> Api Ninja</a> and <a href="#">TimeZone Api.</a>
          <br />
          <br />
          developer: Htet Ah Yan(Jeremy)
          <br />
          <br />
          Design: Htet Ah Yan(Jeremy) </h4>
        </Stack> : null}
        {isSent && 
        <div className="aboutPC">
          
        <CloseRoundedIcon sx={{fontSize:'2.2rem',position:'fixed',right:'0.5vh'}} onClick={() => setIsSent(!isSent)} />
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" onChange={(e) => setValueLength(e.target.value)} style={{color:'green',fontSize:'1.3vw'}}/>
    
      <label>Message</label>
      <textarea name="message" onChange={(e) => setValueLength(e.target.value)} style={{color:'black',fontSize:'1.1vw',maxHeight:'15vh'}}/>
      {valueLength.length>10?<input type="submit" value="Send" className="send" />:<p>Please Write more than 20 letter</p> }
      
      </form>
      </div>}
    </div>
  )
}

export default MenuItemLink;
