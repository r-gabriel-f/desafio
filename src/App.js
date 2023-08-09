import "./App.css";
import { Verpeliculas } from "./components/Verpeliculas";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { React} from "react";
import { Infopelicula } from "./components/Infopelicula";
import { Verfavoritos } from "./components/Verfavoritos";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Verpeliculas/>}/>
        <Route path="/movie/:id" element={<Infopelicula />} />
        <Route path="/favoritos" element={<Verfavoritos/>}/>

        <Route path="/*" element={<Navigate to="/" />} />

      </Routes>
    </Router>
  );
}

export default App;
