import "./App.css";
import "./normalize.css";
import "./null.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authorization from "./components/authtorization/Authtorization";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
              <Route path = "*" element = {<Authorization auth ="signin"/>}></Route>
              <Route path = "register" element = {<Authorization auth ="register"/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
