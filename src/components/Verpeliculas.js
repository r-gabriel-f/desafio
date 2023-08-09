import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Infopelicula } from "./Infopelicula";

export const Verpeliculas = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const fetchMovies = async () => {
    const query = searchTerm;
    const URL = `http://www.omdbapi.com/?s=${query}&apikey=d07fd8f9`;
    const response = await fetch(URL);
    const finalData = await response.json();
    setData(finalData.Search);
  };

  const handleSearch = () => {
    fetchMovies();
  };

  const handleMovieSelection = (movieId) => {
    setSelectedMovieId(movieId);
    localStorage.setItem("selectedMovieId", movieId);
  };
  const handleSaveMovie = (movieData) => {
    const savedMovies = JSON.parse(localStorage.getItem("savedMovies")) || [];
    savedMovies.push(movieData);
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  };
  const navigate = useNavigate();
  const handlefavoritosClick = () => {
    navigate("/favoritos");
  };

  return (
    <section className="p-8">
      <div className="mb-4 flex items-center">
        <input
          type="search"
          className="px-4 py-5 md:py-2 w-full rounded border focus:outline-none focus:border-blue-500"
          placeholder="Buscar por titulo de pelicula"
          aria-label="Search"
          aria-describedby="search-addon"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button
          type="button"
          className="ml-2 px-4 py-5 md:py-2 rounded bg-blue-500 text-white focus:outline-none hover:bg-blue-600"
          onClick={handleSearch}
        >
          Buscar
        </button>
        <button
          type="button"
          className="ml-2 px-4 py-2 w-36  rounded bg-blue-500 text-white focus:outline-none hover:bg-blue-600"
          to="/favoritos"
          onClick={handlefavoritosClick}
        >
          Ver Favoritos
        </button>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-5 gap-4 list-none p-0">
        {data.map((val, index) => (
          <li key={index} className="border p-4">
            <div className="items-center">
              <img
                src={val.Poster}
                alt={val.Title}
                className="w-full h-[250px] mb-2"
              />
              <div className="flex items-center justify-center h-[80px] text-center">
                <p className="font-bold">{val.Title}</p>
              </div>

              <div className="flex flex-col items-center">
                <Link to={`/movie/${val.imdbID}`}>
                  <button
                    onClick={() => handleMovieSelection(val.imdbID)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-2 rounded focus:outline-none"
                  >
                    Detalles
                  </button>
                </Link>

                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-2 rounded focus:outline-none"
                  onClick={() => handleSaveMovie(val)}
                >
                  Guardar Película
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {selectedMovieId && <Infopelicula movieId={selectedMovieId} />}
    </section>
  );
};
