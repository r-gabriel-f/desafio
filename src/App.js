import logo from "./logo.svg";

import "./App.css";
import { Verpeliculas } from "./components/Verpeliculas";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { React, useState, useEffect } from "react";
import { Infopelicula } from "./components/Infopelicula";
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?i=tt0145487&apikey=d07fd8f9")
      .then((response) => response.json())
      .then((data) => setData(data));
      console.log(data);
    
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Verpeliculas/>}/>
        <Route path="/movie/:id" element={<Infopelicula />} />

        <Route path="/*" element={<Navigate to="/" />} />

      </Routes>
    </Router>
  );
}

export default App;
