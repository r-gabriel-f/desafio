import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export const Infopelicula = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      const URL = `http://www.omdbapi.com/?i=${id}&apikey=d07fd8f9`;
      const response = await fetch(URL);
      const finalData = await response.json();
      console.log("API response for movieId:", finalData);
      setMovieData(finalData);
    };

    fetchMovieData();
  }, [id]);

  

  return (
    <section className="container-info p-8">
      {movieData && (
        <div className="flex flex-col items-center">
          <img
            src={movieData.Poster}
            alt={movieData.Title}
            className="w-[250px] h-[350px] mb-4 rounded-lg"
          />
          <p className="text-xl font-semibold mb-2">{movieData.Title}</p>
          <p className="text-gray-600 mb-2">
            Año de Lanzamiento: {movieData.Released}
          </p>
          <p className="text-gray-600 mb-2">Director: {movieData.Director}</p>
          <p className="text-gray-600 mb-2 ">Reparto: {movieData.Actors}</p>
          
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
            onClick={() => window.history.back()}
          >
            Volver atrás
          </button>
         
        </div>
      )}
    </section>
  );
};

