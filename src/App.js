import Home from "./components/pages/Home";
import Create from "./components/pages/Create";
import Event from "./components/pages/Event";
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [response, setResponse] = useState({});
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/create" element={<Create setResponse={setResponse}/>} exact />
          <Route path="/event" element={<Event response={response}/>} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
