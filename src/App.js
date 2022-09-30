import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import "./App.css";
import EventsList from "./components/EventsList";
import EventSpecs from "./components/EventSpecs";

import Navbar from "./components/Navbar";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8002/events")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<EventsList data={data} />} />
          <Route
            path="/form"
            element={<Form data={data} setData={setData} />}
          />
          <Route path="/events/:id" element={<EventSpecs setData={setData} data={data} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
