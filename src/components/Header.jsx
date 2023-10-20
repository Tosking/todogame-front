import React from "react";
import "styleComponents/Header.css";
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom";
import Select from "react-select";
import 'react-dropdown/style.css';
import arrowBurger from "images/arrowBurger.svg";
import signin from "images/signin.svg";
import headericon from "images/headericon.svg";



const options = [
  {value: "All", label: <Link to="/all">All</Link>} ,
  {value:"Today" , label: <Link to = "/today">Today</Link>},
  {value: "Tomorrow", label: <Link to = "/tomorrow">Tomorrow</Link> },
  {value:"7 days" , label: <Link to = "/sevendays">7 days</Link> }
]

const Header = ({burger,to,children})=>{
    return (
      <header className="header">
        <div className="header__inner container">
          {burger?
          <Menu  customBurgerIcon={<img src = {headericon}/>} customCrossIcon={<img src={arrowBurger}/>} >
					 <Link to="/main">Home</Link>
           <Link to="/account">Account</Link>
           <Link to={"/calendar"}>Calendar</Link>
           <Link to={"/settings"}>Settings</Link>
           <div style={{flex:"1 1 auto"}}>
           <Select  isSearchable = {false }  value={"Folders"} options={options} placeholder="Folders"/>
           </div>
           
           <div className="bm-item bm-item__signin">
            <Link to ="/auth/login" className="signin__inner">
              <img src={signin} alt="#" />
              <span style={{fontSize:"24px"}}>Sign In</span>
            </Link>
           </div>
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
          {children ?? ""}
        </div>
      </header>
    );
  }

export default Header;
