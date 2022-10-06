import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormLogin from "./components/FormLogin";
import EventsList from "./components/EventsList";
import EventSpecs from "./components/EventSpecs";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8002/events")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<EventsList data={data} />} />
          <Route
            path="/form"
            element={<FormLogin data={data} setData={setData} />}
          />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/events/:id"
            element={<EventSpecs setData={setData} data={data} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
{reviews.length > 0 && reviews.map(review=>(
  <p>{re}</p>
))}