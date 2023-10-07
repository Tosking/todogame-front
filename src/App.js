import React, { useState} from "react";
import { BrowserRouter, Route,Routes,useLocation } from 'react-router-dom';
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AnimatePresence } from "framer-motion";
import "App.css";
import "normalize.css";
import "null.css";


const  App = ()=> {
  const location = useLocation();
  return (  
    // <AnimatePresence>
      <Routes>
        <Route path = "/register" element = {<Register/>}></Route>
        <Route path = "/login" element = {<Login />}></Route>
        <Route path = "/" element = {<Main/>}></Route>
        <Route path = "/main" element = {<Main/>}></Route>
      </Routes>
      //  </AnimatePresence>


  );
}

export default App;
