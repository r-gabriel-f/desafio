import React from "react";

export const Verfavoritos = () => {
  const savedMovies = JSON.parse(localStorage.getItem("savedMovies")) || [];

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
        {savedMovies.map((movie, index) =>  (
          <li key={index} className="border p-4">
            <div className="items-center">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-[250px] mb-2"
              />

              <p className="text-center font-bold">{movie.Title}</p>
              
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
