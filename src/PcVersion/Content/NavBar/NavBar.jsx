import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./Style/NavBar.css";
import MenuItemLink from "./MenuItemLink";
import MenuIconSvg from "../../../Images/Menu.svg";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import { useState } from "react";
function NavBar() {
  const [isLinkActive, setIsLinkActive] = useState(false);
  return (
    <div className="nav">
      <h3>Jeremy</h3>

      <MenuItemLink isLinkActive={isLinkActive} />

      <div className="menuItem">
        {!isLinkActive ? (
          <img
            src={MenuIconSvg}
            className="menuIcon"
            onClick={() => setIsLinkActive(!isLinkActive)}
          />
        ) : (
          <CloseRoundedIcon className="closeIcon"
            sx={{ fontSize: "3.5rem",position:'fixed',top:'1.2vh',right:'2.5vw'}}
            onClick={() => setIsLinkActive(false)}
          />
        )}
      </div>
    </div>
  );
}

export default NavBar;
