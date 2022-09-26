import Home from "./components/pages/Home";
import Create from "./components/pages/Create";
import Event from "./components/pages/Event";
import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/create' element={<Create/>} exact />
          <Route path='/event' element={<Event/>} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;