import './App.css';
import Home from "./pages/home/Home";
import {  Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login"

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/" element={ <Login/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
