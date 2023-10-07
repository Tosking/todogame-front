import React from "react";
import "styleComponents/Header.css";
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom";
import Select from "react-select";
import 'react-dropdown/style.css';
import arrowBurger from "images/arrowBurger.svg";

const options = [
  {value: <Link to="/all">All</Link>, label:"All"},
  {value: <Link to = "/today">Today</Link>, label:"Today"},
  {value: <Link to = "/tomorrow">Tomorrow</Link>, label:"Tomorrow"},
  {value: <Link to = "/sevendays">7 days</Link>, label:"7 days"}
]

const Header = ({burger,to})=>{
    return (
      <header className="header">
        <div className="header__inner container">
          {burger?
          <Menu  customCrossIcon={<img src={arrowBurger}/>} >
           <Link to="/account">Account</Link>
           <Link to={"/calendar"}>Calendar</Link>
           <Link to={"/settings"}>Settings</Link>
           <Select zisSearchable = {false }  value={"Folders"} options={options} placeholder="Folders">
           </Select>
          </Menu>:
          <Link to = {to??"/main"}>
             <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.939339 15.9393C0.353552 16.5251 0.353552 17.4749 0.939339 18.0607L10.4853 
              27.6066C11.0711 28.1924 12.0208 28.1924 12.6066 27.6066C13.1924 27.0208 13.1924 26.0711 
              12.6066 25.4853L4.12132 17L12.6066 8.51472C13.1924 7.92893 13.1924 6.97919 12.6066 
              6.3934C12.0208 5.80761 11.0711 5.80761 10.4853 6.3934L0.939339 15.9393ZM32 15.5L2 15.5V18.5L32 18.5V15.5Z" fill="white"/>
            </svg>
          </Link>
         
          }
        

        </div>
      </header>
    );
  }

export default Header;
