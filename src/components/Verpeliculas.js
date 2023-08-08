import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Infopelicula } from "./Infopelicula";

export const Verpeliculas = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState(null); // Estado para almacenar el ID de la película seleccionada

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

  return (
    <section className="p-8">
      <div className="mb-4 flex items-center">
        <input
          type="search"
          className="px-4 py-2 w-full rounded border focus:outline-none focus:border-blue-500"
          placeholder="Search by title"
          aria-label="Search"
          aria-describedby="search-addon"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button
          type="button"
          className="ml-2 px-4 py-2 rounded bg-blue-500 text-white focus:outline-none hover:bg-blue-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-5 gap-4 list-none p-0">
        {data.map((val, index) => (
          <li key={index} className="border p-4">
            <div>
              <Link to={`/movie/${val.imdbID}`}>
                <img
                  src={val.Poster}
                  alt={val.Title}
                  className="w-full h-[250px] mb-2"
                />
              </Link>
              <p className="text-center font-bold">{val.Title}</p>
            </div>
          </li>
        ))}
      </ul>
      {selectedMovieId && <Infopelicula movieId={selectedMovieId} />}
    </section>
  );
};
