import { useState} from "react";
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Authorization from "./pages/Authtorization/Authtorization";
import "./App.css";
import "./normalize.css";
import "./null.css";
import Main from "./pages/Main/Main";

const  App = ()=> {

  return (
      <Routes>
        <Route path = "/register" element = {<Authorization   auth ="register"/>}></Route>
        <Route path = "/login" element = {<Authorization  auth ="signin"/>}></Route>
        <Route path = "/" element = {<Authorization  auth ="signin"/>}></Route>
        <Route path = "/main" element = {<Main/>}></Route>


      </Routes>


  );
}

export default App;
