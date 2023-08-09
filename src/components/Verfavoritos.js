import React, { useState } from "react";

export const Verfavoritos = () => {
  const [savedMovies, setSavedMovies] = useState(
    JSON.parse(localStorage.getItem("savedMovies")) || []
  );
  const handleRemoveFavorite = (movieId) => {
    const updatedMovies = savedMovies.filter(
      (movie) => movie.imdbID !== movieId
    );
    setSavedMovies(updatedMovies);
    localStorage.setItem("savedMovies", JSON.stringify(updatedMovies));
  };

  return (
    <section className="p-8">
      <div className="flex flex-col items-center m-5">
        <h2 className="text-2xl font-semibold">Películas Favoritas</h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none mt-2"
          onClick={() => window.history.back()}
        >
          Volver atrás
        </button>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-5 gap-4 list-none p-0">
        {savedMovies.map((movie, index) => (
          <li key={index} className="border p-4">
            <div className="items-center">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-[250px] mb-2"
              />
              <div className="flex items-center justify-center h-[80px] text-center">
                <p className="font-bold">{movie.Title}</p>
              </div>
            
              <div className="flex flex-col items-center">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 mt-2 rounded focus:outline-none"
                  onClick={() => handleRemoveFavorite(movie.imdbID)}
                >
                  Eliminar Favorito
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
