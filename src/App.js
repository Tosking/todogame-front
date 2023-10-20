import React from "react";
import {Route,Routes} from 'react-router-dom';
import Main from "./pages/Main";

import Settings from "pages/settings/Settings";
import EditName from "pages/settings/EditName";
import ChangePassword from "pages/settings/ChangePassword";
import ChangeEmail from "pages/settings/ChangeEmail";
import ChooseTheme from "pages/settings/ChooseTheme";
import AuthRootComponent from "components/auth";
import PrivateRoute from "utils/router/privateRouter";

import "App.css";
import "normalize.css";
import "null.css";

const  App = ()=> {
  return (  
      <Routes>
        <Route path = "/auth/register" element = {<AuthRootComponent/>}></Route>
        <Route path = "/auth/login" element = {<AuthRootComponent/>}></Route>
        <Route  element = {<PrivateRoute/>}>
           <Route path = "/" element = {<Main/>}></Route>
            <Route path = "/main" element = {<Main/>}></Route>
            <Route path = "/settings" element = {<Settings/>}></Route>
            <Route path = "/settingsEditName" element = {<EditName/>}></Route>
            <Route path = "/settingsChangeEmail" element = {<ChangeEmail/>}></Route>
            <Route path = "/settingsChangePassword" element = {<ChangePassword/>}></Route>
            <Route path = "/settingsTheme" element = {<ChooseTheme/>}></Route>
        </Route>

				
      </Routes>
 
  );
  
}
//TODO: Решить с приватными роутами, какие должны быть приватными, какие нет

export default App;
