import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./components/auth/login";
import Header from "./components/header/header";
import Register from './components/auth/register';

const App = () => {
  return <div className="App">
      <Header/>
      <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
      </Routes>
  </div>
}

export default App;