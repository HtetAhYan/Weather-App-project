import React from "react";
import "./Style/Header.css";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { Stack } from "@mui/material";
import Menu from "../../Images/Menu.png";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import OutsideClickHandler from "react-outside-click-handler";
function Header() {
  const [isShow, setIsShow] = useState(false);
  const [isShowAbout, setIsShowAbout] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [valueLength, setValueLength] = useState("");
  //emailJs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Jeremy_kun",
        "JeremyPortfolio",
        form.current,
        "0Vide87CskT8zVici"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="header">
        <h3>Jeremy</h3>

        <img src={Menu} alt="" onClick={() => setIsShow(!isShow)} />
      </div>

      {isShow && (
        <OutsideClickHandler
          onOutsideClick={() => setIsShow(false)}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="menuLink">
            <ul>
              <li>
                <a onClick={() => setIsShowAbout(!isShowAbout)}>
                  <p>About</p>
                </a>
              </li>
              <li>
                <a onClick={() => setIsSent(!isSent)}>
                  <p>Feedback</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <p>Source Code</p>
                </a>
              </li>
            </ul>
            {isShowAbout ? (
              <Stack className="aboutmb">
                <Stack direction="row" sx={{ alignItems: "center" }}>
                  <h1>About</h1>
                  <CloseRoundedIcon
                    sx={{ fontSize: "2.2rem", position: "fixed", right: "1vh" }}
                    onClick={() => setIsShowAbout(!isShowAbout)}
                  />
                </Stack>
                <h4>
                  I created this project using React and material ui. For
                  display icon svg, I used a figma pack called Night Mode Icons
                  by Samrat Chowdhury. For displaying data I used{" "}
                  <a href="#"> open weather api</a>,<a href="#"> Api Ninja</a>{" "}
                  and <a href="#">TimeZone Api.</a>
                  <br />
                  <br />
                  developer: Htet Ah Yan(Jeremy)
                  <br />
                  <br />
                  Design: Htet Ah Yan(Jeremy){" "}
                </h4>
              </Stack>
            ) : null}
            {isSent && (
              <div className="aboutmb">
                <CloseRoundedIcon
                  sx={{
                    fontSize: "2.2rem",
                    position: "fixed",
                    right: "1vh",
                    top: "0",
                  }}
                  onClick={() => setIsSent(!isSent)}
                />
                <form ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input
                    type="text"
                    name="user_name"
                    onChange={(e) => setValueLength(e.target.value)}
                    style={{
                      color: "green",
                      fontSize: "2vh",
                      minWidth: "35vw",
                      minHeight: "3vh",
                    }}
                  />

                  <label>Message</label>
                  <textarea
                    name="message"
                    onChange={(e) => setValueLength(e.target.value)}
                    style={{
                      color: "black",
                      fontSize: "2vh",
                      maxHeight: "15vh",
                      minWidth: "35vw",
                      minHeight: "5vh",
                    }}
                  />
                  {valueLength.length > 10 ? (
                    <input type="submit" value="Send" className="send" />
                  ) : (
                    <p>Please Write more than 10 letter</p>
                  )}
                </form>
              </div>
            )}
          </div>
        </OutsideClickHandler>
      )}
    </div>
  );
}

export default Header;
