import React, { useState } from "react";

export const Verfavoritos = () => {
  const Swal = require('sweetalert2')
  const [savedMovies, setSavedMovies] = useState(
    JSON.parse(localStorage.getItem("savedMovies"))
  );
  const handleRemoveFavorite = (movieId) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas eliminar la película de tus favoritos?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedMovies = savedMovies.filter(
          (movie) => movie.imdbID !== movieId
        );
        setSavedMovies(updatedMovies);
        localStorage.setItem("savedMovies", JSON.stringify(updatedMovies));
        Swal.fire(
          'Eliminada',
          'La película ha sido eliminada de tus favoritos.',
          'success'
        );
      }
    });
  };

  return (
    <section className="p-8">
      <div className="flex flex-col items-center m-5">
        <h2 className="text-2xl font-semibold">Películas Favoritas</h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none m-10"
          onClick={() => window.history.back()}
        >
          Volver atrás
        </button>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-5 gap-4 list-none p-0">
        {savedMovies.map((movie, index) => (
          <li key={index} className="bg-black bg-opacity-50 rounded-lg text-white border p-4">
            <div className="items-center">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-64 mb-2 border rounded-lg"
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
