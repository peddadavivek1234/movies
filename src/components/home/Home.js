import React, { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Function to fetch movie data
    const fetchMovieData = async () => {
      const url = "https://hoblist.com/api/movieList";

      // Define the request body as an object
      const requestBody = {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      };

      try {
        // Make the POST request to the API
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Parse the response data as JSON
        const data = await response.json();
        setMovies(data.result);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    // Call the fetch function
    fetchMovieData();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div className="card mb-3 home" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div>{movie.voted.length}</div>
            <div className="col-md-4">
              <img
                src={movie.poster}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">title: {movie.title}</h5>
                <p className="card-text">Genre: {movie.genre}</p>
                <p className="card-text">Director: {movie.director}</p>
                <p className="card-text">Starring: {movie.stars}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Duration: {movie.duration} Mins | {movie.language} |{" "}
                    {movie.releasedDate}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
