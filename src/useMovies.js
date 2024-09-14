import { useState, useEffect } from "react";

const KEY = "53e5d062";

export function useMovies(query, callBack) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
      function () {
          // callBack?.()
      const controller = new AbortController();

      async function fetchData() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            // `http://www.omdbapi.com/?apikey=${KEY}&s=titanic`
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) {
            throw new Error("Something went wrong with fetching movies");
          }
          const data = await res.json();
          if (data.Response === "False") {
            throw new Error("Movie not found");
          }
          setMovies(data.Search);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (!query.length) {
        setMovies([]);
        setError("");
        return;
      }
    //   handleCloseMovie();
      fetchData();

      return function () {
        controller.abort();
      };
    },
    // [query, callBack]
    [query]
    );
    
    return {movies, isLoading, error}
}
