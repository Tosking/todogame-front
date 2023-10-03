import "./App.css";
import "./normalize.css";
import "./null.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authorization from "./components/authtorization/Authtorization";


function App() {
  return (
    <BrowserRouter>
    <Routes>
          {/* <div className="App"> */}
            <Route path = "*" element = {<Authorization auth ="signin"/>}></Route>
            <Route path = "register" element = {<Authorization auth ="register"/>}></Route>
          {/* </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
