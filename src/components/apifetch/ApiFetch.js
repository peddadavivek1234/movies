import React, { useEffect, useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    // API endpoint and request body
    const apiUrl = "https://hoblist.com/api/movieList";
    const requestBody = {
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting",
    };

    // Make a POST request to the API
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.result);
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
      });
  };

  const handleVote = (movieId, voteType) => {
    // Find the movie with the given id in the movies array
    const updatedMovies = movies.map((movie) => {
      if (movie._id === movieId) {
        // Increase or decrease the voting count based on the voteType
        if (voteType === "up") {
          return { ...movie, voting: movie.voting + 1 };
        } else if (voteType === "down") {
          return { ...movie, voting: movie.voting - 1 };
        }
      }
      return movie;
    });

    // Update the state with the updated voting count
    setMovies(updatedMovies);
  };

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>
            {movie.name} - Votes: {movie.voting}
            <button onClick={() => handleVote(movie._id, "up")}>Up</button>
            <button onClick={() => handleVote(movie._id, "down")}>Down</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
